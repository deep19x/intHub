import { useState } from "react";
import { reviewSolution } from "../../../api/aiapi";

import Editor from "@monaco-editor/react";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { Separator } from "@/components/ui/separator";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import {
    Bot,
    CheckCircle2,
    Lightbulb,
    ArrowLeft,
} from "lucide-react";

const starterCode = {
    cpp: `class Solution {
public:

};`,

    java: `class Solution {

}`,

    python: `class Solution:
    pass`,

    javascript: `function solution() {

}`
};

function SolvedView({ setMode, questionDetails }) {

    const [language, setLanguage] = useState("cpp");
    const [code, setCode] = useState(starterCode.cpp);
    const [review, setReview] = useState(null);
    const [reviewing, setReviewing] = useState(false);
    const [reviewDone, setReviewDone] = useState(false);

    const handleSubmit = async () => {
        try {
            setReviewing(true);

            const response = await reviewSolution({
                questionId: questionDetails._id,
                language,
                code
            });

            setReview(response.data.review);

            setReviewDone(true);
        } catch (error) {
            console.error(error);
        } finally {
            setReviewing(false);
        }
    };

    return (
        <Card className="rounded-xl shadow-md min-h-175">

            <CardHeader className="border-b">

                <CardTitle className="flex items-center gap-2 text-2xl">
                    <Bot className="h-6 w-6 text-blue-600" />
                    InTHub Coach
                </CardTitle>

            </CardHeader>

            <CardContent className="p-8">

                <div className="space-y-6">

                    <div>

                        <h2 className="text-3xl font-bold flex items-center gap-2">
                            <CheckCircle2 className="text-green-500" />
                            Great Job!
                        </h2>

                        <p className="text-muted-foreground mt-3">
                            Paste your solution below and let InTHub AI
                            analyze your approach, optimization,
                            time complexity and code quality.
                        </p>

                    </div>

                    {/* Language */}

                    <div className="space-y-2">

                        <label className="text-sm font-medium">
                            Programming Language
                        </label>

                        <Select
                            value={language}
                            onValueChange={(value) => {
                                setLanguage(value);
                                setCode(starterCode[value]);
                            }}
                        >

                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Language" />
                            </SelectTrigger>

                            <SelectContent>

                                <SelectItem value="cpp">
                                    C++
                                </SelectItem>

                                <SelectItem value="java">
                                    Java
                                </SelectItem>

                                <SelectItem value="python">
                                    Python
                                </SelectItem>

                                <SelectItem value="javascript">
                                    JavaScript
                                </SelectItem>

                            </SelectContent>

                        </Select>

                    </div>

                    {/* Monaco Editor */}

                    <div className="overflow-hidden rounded-lg border">

                        <Editor
                            height="450px"
                            language={language}
                            theme="vs-dark"
                            value={code}
                            onChange={(value) => setCode(value || "")}
                            options={{
                                minimap: {
                                    enabled: false,
                                },
                                fontSize: 15,
                                automaticLayout: true,
                                scrollBeyondLastLine: false,
                                wordWrap: "on",
                                tabSize: 4,
                                padding: {
                                    top: 16,
                                },
                            }}
                        />

                    </div>

                    <Button
                        className="w-full"
                        size="lg"
                        disabled={reviewing}
                        onClick={handleSubmit}
                    >
                        {reviewing ? "Reviewing..." : "Submit for AI Review"}
                    </Button>

                    {reviewDone && (
                        <Card className="mt-8">

                            <CardHeader>
                                <CardTitle>
                                    🤖 AI Review
                                </CardTitle>
                            </CardHeader>

                            <CardContent className="space-y-4">

                                <div>
                                    ✅ Correctness: {review?.correctness}
                                </div>

                                <div>
                                    ⚡ Time Complexity: {review?.timeComplexity}
                                </div>

                                <div>
                                    💾 Space Complexity: {review?.spaceComplexity}
                                </div>

                                <div>
                                    💡 Optimization:
                                    <ul className="list-disc ml-6 mt-2">
                                        {review?.optimization?.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                            </CardContent>

                        </Card>
                    )}

                    <Separator />

                    <div className="flex justify-between">

                        <Button
                            variant="ghost"
                            onClick={() => setMode("choice")}
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back
                        </Button>

                        <Button
                            variant="outline"
                            onClick={() => setMode("help")}
                        >
                            <Lightbulb className="mr-2 h-4 w-4" />
                            I Need Help Instead
                        </Button>

                    </div>

                </div>

            </CardContent>

        </Card>
    );
}

export default SolvedView;