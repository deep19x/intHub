import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import {
    ArrowLeft,
    ExternalLink,
    BookOpen,
    Clock,
    Brain,
    CheckCircle2,
} from "lucide-react";

function QuestionInfo({ questionDetails, handleLeetCode }) {
    return (
        <Card className="h-full shadow-lg rounded-xl border">
            <CardContent className="h-full overflow-y-auto p-5 pr-3">
                <div className="space-y-5">

                    <Link
                        to="/questions"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Questions
                    </Link>

                    <h1 className="mt-4 text-2xl font-bold tracking-tight">
                        {questionDetails.title}
                    </h1>

                    <div className="flex flex-wrap gap-2 mt-3">

                        <Badge
                            className={
                                questionDetails.difficulty === "Easy"
                                    ? "bg-green-600 text-white"
                                    : questionDetails.difficulty === "Medium"
                                        ? "bg-yellow-500 text-black"
                                        : "bg-red-600 text-white"
                            }
                        >
                            {questionDetails.difficulty}
                        </Badge>

                        <Badge className="bg-purple-600 text-white">
                            {questionDetails.topic}
                        </Badge>

                    </div>

                    <div className="flex flex-wrap gap-2 mt-3">
                        {questionDetails.companies?.map((company) => (
                            <Badge
                                key={company}
                                className="bg-blue-600 text-white"
                            >
                                {company}
                            </Badge>
                        ))}
                    </div>

                    <section>

                        <h2 className="flex items-center gap-2 text-lg font-semibold mb-3">
                            <BookOpen className="h-5 w-5 text-primary" />
                            Description
                        </h2>

                        <p className="text-sm leading-7 text-muted-foreground whitespace-pre-line">
                            {questionDetails.description}
                        </p>

                    </section>

                    <section>

                        <h2 className="text-lg font-semibold mb-3">
                            Constraints
                        </h2>

                        <ul className="space-y-2">

                            {questionDetails.constraints
                                ?.split(",")
                                .map((constraint, index) => (

                                    <li
                                        key={index}
                                        className="flex items-start gap-2 text-sm"
                                    >
                                        <CheckCircle2 className="h-4 w-4 mt-1 text-green-500 shrink-0" />

                                        <span>{constraint.trim()}</span>

                                    </li>

                                ))}

                        </ul>

                    </section>

                    <Separator />

                    <section>
                        <h2 className="flex items-center gap-2 text-lg font-semibold mb-3">
                            <BookOpen className="h-5 w-5 text-primary" />
                            What You'll Learn
                        </h2>

                        <ul className="space-y-2">
                            {questionDetails.whatYouWillLearn?.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-center gap-2 text-sm"
                                >
                                    <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <Separator />

                    <section>

                        <h2 className="flex items-center gap-2 text-lg font-semibold mb-3">
                            <Brain className="h-5 w-5 text-primary" />
                            Patterns
                        </h2>

                        <div className="flex flex-wrap gap-2">
                            {questionDetails.patterns?.map((pattern) => (
                                <Badge
                                    key={pattern}
                                    variant="outline"
                                >
                                    {pattern}
                                </Badge>
                            ))}
                        </div>

                    </section>

                    <Separator />

                    <section>

                        <h2 className="flex items-center gap-2 text-lg font-semibold mb-3">
                            <Clock className="h-5 w-5 text-primary" />
                            Estimated Time
                        </h2>

                        <Badge variant="secondary">
                            {questionDetails.estimatedTime} mins
                        </Badge>

                    </section>

                    <Separator />

                    <section className="rounded-xl border bg-muted/20 p-5 text-center">

                        <h2 className="text-lg font-semibold">
                            Ready to Solve?
                        </h2>

                        <p className="text-sm text-muted-foreground mt-2 mb-4">
                            Solve this problem on LeetCode and come back to InTHub
                            for hints, AI review and revision.
                        </p>

                        <Button
                            onClick={handleLeetCode}
                            className="w-full"
                            size="lg"
                        >
                            Open on LeetCode
                            <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>

                    </section>

                </div>
            </CardContent>
        </Card>
    );
}

export default QuestionInfo;