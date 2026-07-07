import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { Badge } from "@/components/ui/badge";

function QuestionCard({ question }) {
    let difficultyClass = "";

    if(question.difficulty === "Easy"){
        difficultyClass = "bg-green-100 text-green-700";
    } else if (question.difficulty === "Medium"){
        difficultyClass = "bg-yellow-100 text-yellow-700";
    }else {
        difficultyClass = "bg-red-100 text-red-700";
    }

    return (
        <Card className="bg-gray-50 hover:shadow-lg transition-all duration-300 h-full border-gray-200">
            <CardHeader>
                <CardTitle>{question.title}</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
                {/* Companies */}
                <div className="flex flex-wrap gap-2">
                    {question.companies.map((company) => (
                        <Badge key={company} className='bg-blue-100 text-blue-700 hover:bg-blue-200'>
                            {company}
                        </Badge>
                    ))}
                </div>

                {/* Topic & Difficulty */}
                <div className="flex gap-2">
                    <Badge className='bg-purple-100 text-purple-700 hover:bg-purple-200'>{question.topic}</Badge>
                    <Badge variant="outline" className={difficultyClass}>{question.difficulty}</Badge>
                </div>

                {/* Open Button */}
                <div className="flex justify-end">
                    <Button className='bg-slate-900 hover:bg-slate-800 cursor-pointer'>Solve →</Button>
                </div>
            </CardContent>
        </Card>
    );
}

export default QuestionCard;