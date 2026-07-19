import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    Bot,
    CircleCheckBig,
    Lightbulb,
    Sparkles,
    BrainCircuit,
    FileCode2,
    ArrowRight,
} from "lucide-react";
import { updateProgress } from "../../../api/progressapi";

function ChoiceView({ setMode,questionDetails }) {

    const handleNeedHelp = async() => {
        try {
            await updateProgress(questionDetails._id,"attempted");
            setMode("help");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Card className="rounded-xl shadow-md min-h-fit">

            <CardHeader className="border-b">
                <CardTitle className="flex items-center gap-2 text-2xl">
                    <Bot className="h-6 w-6 text-blue-600" />
                    InTHub Coach
                </CardTitle>
            </CardHeader>

            <CardContent className="py-12 px-10">

                <div className="max-w-2xl mx-auto">

                    <div className="text-center">

                        <Sparkles className="h-12 w-12 text-blue-600 mx-auto mb-5" />

                        <h2 className="text-4xl font-bold">
                            Welcome Back 👋
                        </h2>

                        <p className="mt-4 text-muted-foreground leading-7">
                            Great! You attempted the problem on LeetCode.
                            Tell InTHub how your attempt went and we'll personalize
                            your learning journey from here.
                        </p>

                    </div>

                    <div className="grid grid-cols-2 gap-5 mt-12">

                        <Button
                            size="lg"
                            className="h-16 text-base"
                            onClick={() => setMode("solved")}
                        >
                            <CircleCheckBig className="mr-2 h-5 w-5" />
                            Yes, I Solved It
                        </Button>

                        <Button
                            variant="outline"
                            size="lg"
                            className="h-16 text-base"
                            onClick={handleNeedHelp}
                        >
                            <Lightbulb className="mr-2 h-5 w-5" />
                            I Need Help
                        </Button>

                    </div>

                    <Separator className="my-12" />

                    <h3 className="text-xl font-semibold mb-6">
                        What happens next?
                    </h3>

                    <div className="space-y-6">

                        <div className="flex gap-4">
                            <BrainCircuit className="h-6 w-6 text-blue-600 mt-1 shrink-0" />
                            <div>
                                <h4 className="font-semibold">
                                    Progressive Learning
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                    Get guided hints from brute force to the optimal approach
                                    without revealing the complete solution immediately.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <FileCode2 className="h-6 w-6 text-green-600 mt-1 shrink-0" />
                            <div>
                                <h4 className="font-semibold">
                                    AI Code Review
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                    Paste your solution and receive feedback on
                                    correctness, optimization, and coding style.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <ArrowRight className="h-6 w-6 text-purple-600 mt-1 shrink-0" />
                            <div>
                                <h4 className="font-semibold">
                                    Track Your Progress
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                    Update your progress automatically and build
                                    a consistent interview preparation history.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

            </CardContent>

        </Card>
    );
}

export default ChoiceView;