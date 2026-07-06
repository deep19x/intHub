import {
    Card,
    CardHeader,
    CardTitle,
    CardContent
} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

import { TriangleAlert } from 'lucide-react';

function WeakTopicsCard({ weakTopics }) {
    return (
        <Card className="w-full shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                    <TriangleAlert className='h-5 w-5 text-yellow-500' />
                    Weak Topics
                </CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
                {weakTopics.map(([topic, stats]) => {
                    return (
                        <div key={topic}>
                            <div className="flex justify-between">
                                <span>{topic}</span>
                                <span>{stats.completionPercentage}%</span>
                            </div>

                            <Progress value={stats.completionPercentage} />
                        </div>
                    );
                })}
                <div className="flex justify-end">
                    <Button variant="outline" size="sm">
                        View Analytics
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default WeakTopicsCard;