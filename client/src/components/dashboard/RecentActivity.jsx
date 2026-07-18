import { useEffect, useState } from "react";
import { getRecentActivity } from "@/api/statsapi";
import { getSubmissionDetails } from "@/api/submissionapi";
import SubmissionDetailsDialog from "../questions/SubmissionDetailsDialog";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import {
    History,
    Star,
    Clock3,
    Code2,
} from "lucide-react";

function RecentActivity() {

    const [activities, setActivities] = useState([]);
    const [selectedSubmission, setSelectedSubmission] = useState(null);
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleActivityClick = async (submissionId) => {
        try {

            const response = await getSubmissionDetails(submissionId);

            setSelectedSubmission(response.data.submission);

            setDialogOpen(true);

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {

        const fetchActivity = async () => {
            try {

                const response = await getRecentActivity();
                setActivities(response.data.submissions);

            } catch (error) {
                console.error(error);
            }
        };

        fetchActivity();

    }, []);

    return (
        <Card className="shadow-lg rounded-2xl">

            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                    <History className="h-6 w-6 text-blue-600" />
                    Recent Activity
                </CardTitle>
            </CardHeader>

            <CardContent>

                {activities.length === 0 ? (

                    <div className="text-center py-10 text-muted-foreground">
                        No submissions yet.
                    </div>

                ) : (

                    <div className="relative">

                        {/* Timeline Line */}
                        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200"></div>

                        <div className="space-y-6">

                            {activities.map((activity) => (

                                <div
                                    key={activity._id}
                                    className="relative flex gap-5"
                                >

                                    {/* Timeline Circle */}

                                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 border-4 border-white shadow">

                                        <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />

                                    </div>

                                    {/* Card */}

                                    <div className="flex-1 rounded-xl border bg-white p-5 transition-all hover:shadow-md hover:border-blue-300 cursor-pointer"
                                        onClick={() => handleActivityClick(activity._id)}>

                                        <div className="flex items-start justify-between">

                                            <div>

                                                <h3 className="font-semibold text-lg">
                                                    {activity.question.title}
                                                </h3>

                                                <div className="mt-3 flex flex-wrap gap-2">

                                                    <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
                                                        ⭐ {activity.aiReview.rating}/10
                                                    </Badge>

                                                    <Badge
                                                        variant="secondary"
                                                        className="flex items-center gap-1"
                                                    >
                                                        <Code2 className="h-3 w-3" />
                                                        {activity.language.toUpperCase()}
                                                    </Badge>

                                                </div>

                                            </div>

                                            <div className="text-right">

                                                <div className="flex items-center justify-end gap-1 text-muted-foreground text-sm">

                                                    <Clock3 className="h-4 w-4" />

                                                    {new Date(
                                                        activity.createdAt
                                                    ).toLocaleDateString()}

                                                </div>

                                                <p className="text-xs text-muted-foreground mt-1">
                                                    {new Date(
                                                        activity.createdAt
                                                    ).toLocaleTimeString()}
                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>

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

export default RecentActivity;