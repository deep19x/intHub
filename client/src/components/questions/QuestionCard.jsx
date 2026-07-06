import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { Badge } from "@/components/ui/badge";

function QuestionCard({ question }) {
    return (
        <Card className="mb-4">
            <CardHeader>
                <CardTitle>{question.title}</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
                {/* Companies */}
                <div className="flex flex-wrap gap-2">
                    {question.companies.map((company) => (
                        <Badge key={company} variant="secondary">
                            {company}
                        </Badge>
                    ))}
                </div>

                {/* Topic & Difficulty */}
                <div className="flex gap-2">
                    <Badge>{question.topic}</Badge>
                    <Badge variant="outline">{question.difficulty}</Badge>
                </div>

                {/* Open Button */}
                <div className="flex justify-end">
                    <Button>Open</Button>
                </div>
            </CardContent>
        </Card>
    );
}

export default QuestionCard;