import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getQuestionById } from "../api/questionsapi";
import Navbar from "../components/layout/Navbar";

import QuestionInfo from "../components/questions/QuestionInfo";
import LearningWorkspace from "../components/questions/LearningWorkspace";
import SubmissionHistory from "../components/questions/SubmissionHistory";
import { getSubmissions } from "../api/submissionapi";

function QuestionDetails() {
    const [questionDetails, setQuestionDetails] = useState({});
    const [workspaceOpen, setWorkspaceOpen] = useState(false);
    const [submissions, setSubmissions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { id } = useParams();

    const handleLeetCode = () => {
        window.open(questionDetails.leetcodeUrl, '_blank');
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

                {!workspaceOpen ? (

                    <QuestionInfo
                        questionDetails={questionDetails}
                        handleLeetCode={handleLeetCode}
                    />

                ) : (

                    <div className="grid grid-cols-12 gap-6 items-start">

                        {/* Left Panel */}
                        <div className="col-span-4">

                            <div className="sticky top-20 h-[calc(100vh-6rem)]">

                                <QuestionInfo
                                    questionDetails={questionDetails}
                                    handleLeetCode={handleLeetCode}
                                />

                                <SubmissionHistory submissions={submissions} />

                            </div>

                        </div>

                        {/* Right Panel */}

                        <div className="col-span-8 col-start-5">

                            <LearningWorkspace
                                questionDetails={questionDetails}
                                fetchSubmissions={fetchSubmissions}
                            />

                        </div>

                    </div>

                )}

            </div>


        </>

    );
}

export default QuestionDetails;