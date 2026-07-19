import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getQuestionById } from "../api/questionsapi";
import Navbar from "../components/layout/Navbar";
import QuestionCardSkeleton from "../components/loaders/QuestionCardSkeleton";
import QuestionInfo from "../components/questions/QuestionInfo";
import LearningWorkspace from "../components/questions/LearningWorkspace";
import SubmissionHistory from "../components/questions/SubmissionHistory";
import { getSubmissions } from "../api/submissionapi";
import { getMyProgress } from "../api/progressapi";
import Footer from "../components/layout/Footer";

function QuestionDetails() {
    const [questionDetails, setQuestionDetails] = useState({});
    const [workspaceOpen, setWorkspaceOpen] = useState(false);
    const [progressStatus, setProgressStatus] = useState(null);
    const [submissions, setSubmissions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { id } = useParams();

    const handleLeetCode = () => {
        window.open(questionDetails.leetcodeUrl, "_blank");
        setWorkspaceOpen(true);
    };

    const fetchSubmissions = async () => {
        try {
            if (!questionDetails._id) return;

            const response = await getSubmissions(questionDetails._id);
            setSubmissions(response.data.submissions);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const fetchQuestionDetails = async () => {
            try {
                setLoading(true);

                const response = await getQuestionById(id);
                const question = response.data.question;

                setQuestionDetails(question);

                const submissionResponse = await getSubmissions(question._id);
                setSubmissions(submissionResponse.data.submissions);

                const progressResponse = await getMyProgress();

                const progress = progressResponse.data.progress.find(
                    (item) => item.question._id === question._id
                );

                if (progress) {
                    setProgressStatus(progress.status);
                    setWorkspaceOpen(true);
                }
            } catch (error) {
                setError(error);
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchQuestionDetails();
    }, [id]);

    if (loading) {
        return (
            <>
                <Navbar />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <QuestionCardSkeleton key={index} />
                        ))}
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 min-h-screen">

                {workspaceOpen ? (
                    <>
                        <div className="flex flex-col lg:flex-row gap-6">

                            {/* Left */}
                            <div className="lg:w-[32%] space-y-6">
                                <QuestionInfo
                                    questionDetails={questionDetails}
                                    handleLeetCode={handleLeetCode}
                                />
                                <SubmissionHistory
                                    submissions={submissions}
                                />
                            </div>

                            {/* Right */}
                            <div className="lg:flex-1">
                                <LearningWorkspace
                                    questionDetails={questionDetails}
                                    fetchSubmissions={fetchSubmissions}
                                    progressStatus={progressStatus}
                                />
                            </div>
                        </div>
                    </>
                ) : (
                    <QuestionInfo
                        questionDetails={questionDetails}
                        handleLeetCode={handleLeetCode}
                    />
                )}

            </main>

            <Footer />
        </>
    );
}

export default QuestionDetails;