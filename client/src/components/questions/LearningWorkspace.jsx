import { useState, useEffect } from "react";
import ChoiceView from "./learningWorkspace/ChoiceView";
import HelpView from "./learningWorkspace/HelpView";
import SolvedView from "./learningWorkspace/SolvedView";
function LearningWorkspace({ questionDetails, fetchSubmissions, progressStatus }) {
    const [mode, setMode] = useState("choice");
    const [helpStep, setHelpStep] = useState(0);

    useEffect(() => {
        if (progressStatus === "solved") {
            setMode("solved");
        } else if (progressStatus === "attempted") {
            setMode("help");
        } else {
            setMode("choice");
        }
    }, [progressStatus]);
    
    return (
        <>
            {mode === "choice" && (
                <ChoiceView setMode={setMode} questionDetails={questionDetails} />
            )}

            {mode === "help" && (
                <HelpView questionDetails={questionDetails} setMode={setMode} setStep={setHelpStep} step={helpStep} />
            )}

            {mode === "solved" && (
                <SolvedView setMode={setMode} questionDetails={questionDetails} fetchSubmissions={fetchSubmissions} />
            )}
        </>
    )
}

export default LearningWorkspace;