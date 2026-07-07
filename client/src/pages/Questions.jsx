import { useEffect, useState } from "react";
import { getQuestions } from "../api/questionsapi";
import QuestionCard from "../components/questions/QuestionCard";
import { Input } from '@/components/ui/input';

function Questions() {
    const [questions, setQuestions] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                setLoading(true);

                const response = await getQuestions();
                setQuestions(response.data.questions);

            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchQuestions();
    }, []);

    if (loading) {
        return <h2>Loading questions...</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    const filteredQuestions = questions.filter((question) => {
        if (!search.trim()) return true;

        return question.title
            .toLowerCase()
            .split(" ")
            .some(word => word.startsWith(search.toLowerCase()));
    });

    return (
        <div className="max-w-7xl mx-auto p-6 ">

            <div className="mb-8">
                <h1 className="text-3xl font-bold">Interview Questions</h1>
                <p className="text-gray-500 mt-2">Practice the most frequently asked coding interview questions.</p>
            </div>

            <div className="mb-6">
                <Input
                    type="text"
                    placeholder="Search interview questions..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredQuestions.map((question) => (
                    <QuestionCard
                        key={question._id}
                        question={question}
                    />
                ))}
            </div>
        </div>
    );
}

export default Questions;