import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getQuestionById } from "../api/questionsapi";
import Navbar from "../components/layout/Navbar";

import QuestionInfo from "../components/questions/QuestionInfo";
import LearningWorkspace from "../components/questions/LearningWorkspace";

function QuestionDetails() {
    const [questionDetails, setQuestionDetails] = useState({});
    const [workspaceOpen, setWorkspaceOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { id } = useParams();

    const handleLeetCode = () => {
        window.open(questionDetails.leetcodeUrl, '_blank');
        setWorkspaceOpen(true);
    };

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

                {!workspaceOpen ? (

                    <QuestionInfo
                        questionDetails={questionDetails}
                        handleLeetCode={handleLeetCode}
                    />

                ) : (

                    <div className="grid grid-cols-12 gap-6 items-start">

                        {/* Left Panel */}
                        <div className="col-span-4 relative">

                            <div className="fixed top-20 w-92.5">

                                <QuestionInfo
                                    questionDetails={questionDetails}
                                    handleLeetCode={handleLeetCode}
                                />

                            </div>

                        </div>

                        {/* Right Panel */}

                        <div className="col-span-8 col-start-5">

                            <LearningWorkspace
                                questionDetails={questionDetails}
                            />

                        </div>

                    </div>

                )}

            </div>


        </>

    );
}

export default QuestionDetails;