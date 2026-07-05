import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Progress } from "@/components/ui/progress";

function CompletionCard({value,solved,total}) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Overall Progress</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
                <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                        Completion
                    </span>

                    <span className="font-bold">
                        {value}%
                    </span>
                </div>

                <Progress value={value} />

                <p className="text-sm text-muted-foreground">
                    You've solved {solved} of {total} questions.
                </p>
            </CardContent>
        </Card>
    );
}

export default CompletionCard;