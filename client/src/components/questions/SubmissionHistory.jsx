import { useState } from "react";
import SubmissionDetailsDialog from "./SubmissionDetailsDialog";
import { getSubmissionDetails } from "../../api/submissionapi";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import { History, Star } from "lucide-react";

function SubmissionHistory({ submissions }) {
    const [selectedSubmission, setSelectedSubmission] = useState(null);
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleSubmissionClick = async (submissionId) => {
        try {

            const response = await getSubmissionDetails(submissionId);

            setSelectedSubmission(response.data.submission);

            setDialogOpen(true);

        } catch (error) {
            console.error(error);
        }
    };
    return (
        <Card className="mt-6 shadow-lg rounded-xl">

            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <History className="h-5 w-5 text-blue-600" />
                    Previous Submissions
                </CardTitle>
            </CardHeader>

            <CardContent>

                {submissions.length === 0 ? (

                    <p className="text-sm text-muted-foreground text-center py-6">
                        No submissions yet.
                    </p>

                ) : (

                    <div className="space-y-4">

                        {submissions.map((submission, index) => (

                            <div key={submission._id} onClick={() => handleSubmissionClick(submission._id)}
                                className="cursor-pointer rounded-lg p-3 hover:bg-muted transition-colors">

                                <div className="flex items-center justify-between">

                                    <div className="space-y-2">

                                        <div className="flex items-center gap-2">

                                            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />

                                            <span className="font-semibold">
                                                {submission.aiReview.rating}/10
                                            </span>

                                        </div>

                                        <p className="text-sm text-muted-foreground">
                                            {new Date(submission.createdAt).toLocaleString()}
                                        </p>

                                    </div>

                                    <Badge variant="secondary">
                                        {submission.language.toUpperCase()}
                                    </Badge>

                                </div>

                                {index !== submissions.length - 1 && (
                                    <Separator className="mt-4" />
                                )}

                            </div>

                        ))}

                    </div>

                )}

            </CardContent>

            <SubmissionDetailsDialog
                open={dialogOpen}
                onOpenChange={setDialogOpen}
                submission={selectedSubmission}
            />

        </Card>
    );
}

export default SubmissionHistory;