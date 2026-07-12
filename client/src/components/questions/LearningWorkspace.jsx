import { useState } from "react";
import ChoiceView from "./learningWorkspace/ChoiceView";
import HelpView from "./learningWorkspace/HelpView";
import SolvedView from "./learningWorkspace/SolvedView";
function LearningWorkspace() {
    const [mode,setMode] = useState("choice");
    return (
        <>
            {mode === "choice" && (
                <ChoiceView setMode={setMode}/>
            )}

            {mode === "help" && (
                <HelpView/>
            )}

            {mode === "solved" && (
                <SolvedView/>
            )}
        </>
    )
}

export default LearningWorkspace;