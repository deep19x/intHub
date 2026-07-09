import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getQuestionById } from "../api/questionsapi";
import Navbar from "../components/layout/Navbar";
import { Link } from "react-router-dom";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

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

function QuestionDetails() {
    const [questionDetails, setQuestionDetails] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchQuestionDetails = async () => {
            try {
                setLoading(true);
                const response = await getQuestionById(id);
                setQuestionDetails(response.data.question);
            } catch (error) {
                setError(error);
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        fetchQuestionDetails();
    }, [id]);
    return (
        <>
            <Navbar />

            <div className="max-w-7xl mx-auto px-6 py-8">

                {/* Back */}
                <Link
                    to="/questions"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Questions
                </Link>

                {/* Title */}
                <h1 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight">
                    {questionDetails.title}
                </h1>

                {/* Difficulty & Topic */}
                <div className="flex flex-wrap gap-3 mt-5">

                    <Badge
                        className={
                            questionDetails.difficulty === "Easy"
                                ? "bg-green-600 hover:bg-green-700 text-white"
                                : questionDetails.difficulty === "Medium"
                                    ? "bg-yellow-500 hover:bg-yellow-600 text-black"
                                    : "bg-red-600 hover:bg-red-700 text-white"
                        }
                    >
                        {questionDetails.difficulty}
                    </Badge>

                    <Badge className="bg-purple-600 hover:bg-purple-700 text-white">
                        {questionDetails.topic}
                    </Badge>

                </div>

                {/* Companies */}
                <div className="flex flex-wrap gap-2 mt-5">
                    {questionDetails.companies?.map((company) => (
                        <Badge
                            key={company}
                            className="bg-blue-600 hover:bg-blue-700 text-white"
                        >
                            {company}
                        </Badge>
                    ))}
                </div>

                <hr className="my-10 border-border" />

                {/* What You'll Learn */}
                <section>

                    <h2 className="flex items-center gap-2 text-2xl font-semibold mb-5">
                        <BookOpen className="h-6 w-6 text-primary" />
                        What You'll Learn
                    </h2>

                    <ul className="space-y-4">

                        {questionDetails.whatYouWillLearn?.map((item) => (

                            <li
                                key={item}
                                className="flex items-center gap-3 text-lg"
                            >
                                <CheckCircle2 className="h-5 w-5 text-green-500" />
                                {item}
                            </li>

                        ))}

                    </ul>

                </section>

                <hr className="my-10 border-border" />

                {/* Patterns */}
                <section>

                    <h2 className="flex items-center gap-2 text-2xl font-semibold mb-5">
                        <Brain className="h-6 w-6 text-primary" />
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

                <hr className="my-10 border-border" />

                {/* Estimated Time */}
                <section>

                    <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
                        <Clock className="h-6 w-6 text-primary" />
                        Estimated Time
                    </h2>

                    <p className="text-lg text-muted-foreground">
                        {questionDetails.estimatedTime} Minutes
                    </p>

                </section>

                <hr className="my-10 border-border" />

                {/* CTA */}

                <section className="rounded-xl border bg-card p-8 text-center">

                    <h2 className="text-2xl font-bold">
                        Ready to Solve?
                    </h2>

                    <p className="text-muted-foreground mt-3 mb-6 max-w-xl mx-auto">
                        Solve this problem on LeetCode and come back to InTHub
                        for hints, AI review, notes and revision.
                    </p>

                    <Button
                        asChild
                        size="lg"
                    >
                        <a
                            href={questionDetails.leetcodeUrl}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Open on LeetCode

                            <ExternalLink className="ml-2 h-4 w-4" />

                        </a>

                    </Button>

                </section>

            </div>

        </>
    
    );
}

export default QuestionDetails;