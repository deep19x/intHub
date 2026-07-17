import Editor from "@monaco-editor/react";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

function SubmissionDetailsDialog({
    open,
    onOpenChange,
    submission,
}) {
    if (!submission) return null;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>

            <DialogContent className="w-[95vw] sm:max-w-350 h-[90vh] overflow-hidden rounded-2xl p-0 flex flex-col">

                <DialogHeader className="px-8 pt-6 pb-4 shrink-0 border-b">
                    <DialogTitle className="text-2xl">
                        Submission Details
                    </DialogTitle>
                </DialogHeader>

                <div className="flex-1 overflow-y-auto p-8 space-y-8">

                    {/* Header */}

                    <div className="flex items-center justify-between flex-wrap gap-3">

                        <div>

                            <h2 className="text-3xl font-bold">
                                ⭐ {submission.aiReview.rating}/10
                            </h2>

                            <p className="text-sm text-muted-foreground mt-1">
                                {new Date(submission.createdAt).toLocaleString()}
                            </p>

                        </div>

                        <Badge className="text-sm px-4 py-2">
                            {submission.language.toUpperCase()}
                        </Badge>

                    </div>

                    <Separator />

                    {/* Code + Review */}

                    <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 items-start">

                        {/* Left */}

                        <div className="min-w-0">

                            <h3 className="font-semibold mb-3 text-lg">
                                Submitted Code
                            </h3>

                            <div className="rounded-xl overflow-hidden border">
                                <Editor
                                    width="100%"
                                    height="600px"
                                    language={submission.language}
                                    value={submission.code}
                                    theme="vs-dark"
                                    options={{
                                        readOnly: true,
                                        minimap: {
                                            enabled: false,
                                        },
                                        fontSize: 14,
                                        scrollBeyondLastLine: false,
                                        automaticLayout: true,
                                    }}
                                />
                            </div>

                        </div>

                        {/* Right */}

                        <div className="space-y-6 min-w-0">

                            <div>

                                <h3 className="font-semibold text-lg mb-2">
                                    Correctness
                                </h3>

                                <p className="text-muted-foreground leading-7">
                                    {submission.aiReview.correctness}
                                </p>

                            </div>

                            <div className="grid grid-cols-2 gap-4">

                                <div className="rounded-xl border p-4">

                                    <h4 className="font-semibold mb-2">
                                        Time Complexity
                                    </h4>

                                    <Badge>
                                        {submission.aiReview.timeComplexity}
                                    </Badge>

                                </div>

                                <div className="rounded-xl border p-4">

                                    <h4 className="font-semibold mb-2">
                                        Space Complexity
                                    </h4>

                                    <Badge>
                                        {submission.aiReview.spaceComplexity}
                                    </Badge>

                                </div>

                            </div>

                            <div className="rounded-xl border p-4">

                                <h3 className="font-semibold text-lg mb-3">
                                    Optimization Suggestions
                                </h3>

                                <ul className="list-disc pl-5 space-y-2">

                                    {submission.aiReview.optimization.map((item) => (
                                        <li key={item}>
                                            {item}
                                        </li>
                                    ))}

                                </ul>

                            </div>

                            <div className="rounded-xl border p-4">

                                <h3 className="font-semibold text-lg mb-3">
                                    Edge Cases
                                </h3>

                                <ul className="list-disc pl-5 space-y-2">

                                    {submission.aiReview.edgeCases.map((item) => (
                                        <li key={item}>
                                            {item}
                                        </li>
                                    ))}

                                </ul>

                            </div>

                        </div>

                    </div>

                </div>

            </DialogContent>

        </Dialog>
    );
}

export default SubmissionDetailsDialog;