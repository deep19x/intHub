import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter
} from "@/components/ui/card";

import { Bot } from 'lucide-react';

function RecommendationCard({weakTopics,message}) {
    return (
        <Card className='shadow-md  hover:shadow-lg transition-shadow'>
            <CardHeader>
                <CardTitle className='flex items-center gap-2 '>
                    <Bot className='h-5 w-5 text-primary' />
                    AI Coach
                </CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
                <p>Your weak topics are:</p>

                <p className="text-lg font-semibold text-primary">{weakTopics.join(", ")}</p>

            </CardContent>
            <CardFooter className='flex flex-col items-start rounded-lg bg-muted p-4 gap-2'>
                <p className="font-semibold">
                    Recommendation
                </p>
                <p className="text-sm text-muted-foreground">
                    {message}
                </p>
            </CardFooter>

        </Card>
    )
}

export default RecommendationCard;