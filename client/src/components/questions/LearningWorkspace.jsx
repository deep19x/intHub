import { useState } from "react";
import ChoiceView from "./learningWorkspace/ChoiceView";
import HelpView from "./learningWorkspace/HelpView";
import SolvedView from "./learningWorkspace/SolvedView";
function LearningWorkspace({questionDetails}) {
    const [mode,setMode] = useState("choice");
    return (
        <>
            {mode === "choice" && (
                <ChoiceView setMode={setMode}/>
            )}

            {mode === "help" && (
                <HelpView questionDetails={questionDetails} setMode={setMode}/>
            )}

            {mode === "solved" && (
                <SolvedView setMode={setMode}/>
            )}
        </>
    )
}

export default LearningWorkspace;