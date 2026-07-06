import { useEffect, useState } from "react";
import { getQuestions } from "../api/questionsapi";
import QuestionCard from "../components/questions/QuestionCard";

function Questions() {
    const [questions, setQuestions] = useState([]);
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

    return (
        <div className="space-y-4">
            {questions.map((question) => (
                <QuestionCard
                    key={question._id}
                    question={question}
                />
            ))}
        </div>
    );
}

export default Questions;