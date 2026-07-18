import { useEffect, useState } from "react";
import { getQuestions } from "../api/questionsapi";
import QuestionCard from "../components/questions/QuestionCard";
import Navbar from "../components/layout/Navbar";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { getMyProgress } from "../api/progressapi";
import Footer from "../components/layout/Footer";

function Questions() {
    const [questions, setQuestions] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState("All");
    const [selectedDifficulty, setSelectedDifficulty] = useState("All");
    const [progressMap, setProgressMap] = useState({});
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const [questionResponse, progressResponse] = await Promise.all([
                    getQuestions(),
                    getMyProgress(),
                ]);

                setQuestions(questionResponse.data.questions);

                const map = {};

                progressResponse.data.progress.forEach((item) => {
                    map[item.question._id] = item.status;
                });

                setProgressMap(map);

            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <h2>Loading questions...</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    const companies = [
        "All",
        ...new Set(
            questions.flatMap((question) => question.companies)
        ),
    ];

    const difficulties = [
        "All",
        "Easy",
        "Medium",
        "Hard"
    ];

    const filteredQuestions = questions.filter((question) => {
        const matchesSearch =
            !search.trim() ||
            question.title
                .toLowerCase()
                .split(" ")
                .some((word) => word.startsWith(search.toLowerCase()));

        const matchesCompany =
            selectedCompany === "All" ||
            question.companies.includes(selectedCompany);

        const matchesDifficulty =
            selectedDifficulty === "All" ||
            question.difficulty === selectedDifficulty;

        return matchesSearch && matchesCompany && matchesDifficulty;
    });

    return (

        <>
            <Navbar />
            <div className="max-w-7xl mx-auto p-6 flex-1 ">

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

                <div className="flex flex-wrap gap-3 mb-6">
                    {companies.map((company) => (
                        <Button
                            className={
                                selectedCompany === company
                                    ? "rounded-full bg-slate-900 text-white hover:bg-slate-800"
                                    : "rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200"
                            }
                            key={company}
                            variant="outline"
                            onClick={() => setSelectedCompany(company)}
                        >
                            {company}
                        </Button>
                    ))}
                </div>

                <div className="flex flex-wrap gap-3 mb-6">
                    {difficulties.map((difficulty) => (
                        <Button
                            className={
                                selectedDifficulty === difficulty
                                    ? "rounded-full bg-slate-900 text-white hover:bg-slate-800"
                                    : "rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200"
                            }
                            key={difficulty}
                            variant="outline"
                            onClick={() => setSelectedDifficulty(difficulty)}
                        >
                            {difficulty}
                        </Button>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {filteredQuestions.map((question) => (
                        <QuestionCard
                            key={question._id}
                            question={question}
                            progressStatus={progressMap[question._id]}
                        />
                    ))}
                </div>
            </div>

            <Footer/>

        </>
    );
}

export default Questions;