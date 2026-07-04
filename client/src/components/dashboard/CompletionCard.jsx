import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Progress } from "@/components/ui/progress";

function CompletionCard() {
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
                        40%
                    </span>
                </div>

                <Progress value={40} />

                <p className="text-sm text-muted-foreground">
                    You've solved 12 of 30 questions.
                </p>
            </CardContent>
        </Card>
    );
}

export default CompletionCard;