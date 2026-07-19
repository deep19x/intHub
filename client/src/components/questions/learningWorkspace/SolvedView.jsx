import { useState } from "react";
import { reviewSolution } from "../../../api/aiapi";
import { updateProgress } from "../../../api/progressapi";

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

function SolvedView({ setMode, questionDetails, fetchSubmissions }) {

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

            await updateProgress(questionDetails._id, "solved");

            await fetchSubmissions();

            setReviewDone(true);
        } catch (error) {
            console.error(error);
        } finally {
            setReviewing(false);
        }
    };

    return (
        <Card className="rounded-xl shadow-md min-h-fit">

            <CardHeader className="border-b">

                <CardTitle className="flex items-center gap-2 text-2xl">
                    <Bot className="h-6 w-6 text-blue-600" />
                    InTHub Coach
                </CardTitle>

            </CardHeader>

            <CardContent className="p-5 lg:p-8">

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

                    {/* Monaco Editor */}

                    <div className="overflow-hidden rounded-lg border w-full">

                        <Editor

                            height={window.innerWidth < 640 ? "350px" : "500px"}

                            language={language}

                            value={code}

                            onChange={(value) => setCode(value || "")}

                            theme="vs-dark"

                            options={{

                                minimap: {
                                    enabled: false
                                },

                                fontSize: window.innerWidth < 640 ? 12 : 14,

                                wordWrap: "on",

                                automaticLayout: true,

                                scrollBeyondLastLine: false,

                                padding: {
                                    top: 12
                                },

                                lineNumbers: "on",

                                scrollbar: {
                                    horizontal: "hidden",
                                    vertical: "auto"
                                },

                                fixedOverflowWidgets: true,

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

                            <CardContent className="space-y-6">

                                <div className="rounded-lg border bg-muted/40 p-4">

                                    <p className="text-sm text-muted-foreground">
                                        Overall Rating
                                    </p>

                                    <h2 className="text-3xl font-bold mt-1">
                                        ⭐ {review?.rating}/10
                                    </h2>

                                </div>

                                <div className="rounded-lg border p-4">

                                    <h3 className="flex items-center gap-2 text-lg font-semibold">
                                        ✅ Correctness
                                    </h3>

                                    <p className="mt-2 text-muted-foreground leading-7">
                                        {review?.correctness}
                                    </p>

                                </div>

                                <div className="rounded-lg border p-4">

                                    <h3 className="flex items-center gap-2 text-lg font-semibold">
                                        ⚡ Complexity Analysis
                                    </h3>

                                    <div className="mt-4 space-y-2">

                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">
                                                Time Complexity
                                            </span>

                                            <span className="font-medium">
                                                {review?.timeComplexity}
                                            </span>
                                        </div>

                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">
                                                Space Complexity
                                            </span>

                                            <span className="font-medium">
                                                {review?.spaceComplexity}
                                            </span>
                                        </div>

                                    </div>

                                </div>

                                <div className="rounded-lg border p-4">

                                    <h3 className="flex items-center gap-2 text-lg font-semibold">
                                        💡 Optimization Suggestions
                                    </h3>

                                    <ul className="mt-4 space-y-3">

                                        {review?.optimization?.map((item, index) => (

                                            <li
                                                key={index}
                                                className="flex items-start gap-3"
                                            >
                                                <span className="mt-1 text-yellow-500">•</span>

                                                <span className="text-muted-foreground leading-7">
                                                    {item}
                                                </span>

                                            </li>

                                        ))}

                                    </ul>

                                </div>

                                {review?.edgeCases?.length > 0 && (
                                    <div className="rounded-lg border p-4">

                                        <h3 className="flex items-center gap-2 text-lg font-semibold">
                                            ⚠️ Edge Cases to Test
                                        </h3>

                                        <ul className="mt-4 space-y-3">

                                            {review.edgeCases.map((item, index) => (

                                                <li
                                                    key={index}
                                                    className="flex items-start gap-3"
                                                >
                                                    <span className="mt-1 text-red-500">•</span>

                                                    <span className="text-muted-foreground leading-7">
                                                        {item}
                                                    </span>

                                                </li>

                                            ))}

                                        </ul>

                                    </div>
                                )}

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