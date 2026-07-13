import { useState } from "react";

import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { Separator } from "@/components/ui/separator";

import {
    Bot,
    Lightbulb,
    Lock,
    ChevronRight,
} from "lucide-react";

function HelpView({ questionDetails, setMode,setStep,step}) {


    return (
        <Card className="rounded-xl shadow-md min-h-175">

            <CardHeader className="border-b">

                <CardTitle className="flex items-center gap-2 text-2xl">
                    <Bot className="h-6 w-6 text-blue-600" />
                    InTHub Coach
                </CardTitle>

            </CardHeader>

            <CardContent className="p-8">

                <h2 className="text-3xl font-bold">
                    Need a little push? 💡
                </h2>

                <p className="text-muted-foreground mt-3">
                    Hints are unlocked one by one.
                    Try to think before revealing the next step.
                </p>

                <Separator className="my-8" />

                {/* Brute Hint */}

                <div>

                    <h3 className="font-semibold text-lg">
                        🟢 Brute Force
                    </h3>

                    <div className="mt-4 rounded-lg border bg-muted/30 p-4">

                        {step >= 0 && (
                            <p>
                                {questionDetails?.hints?.brute}
                            </p>
                        )}

                    </div>

                    {step === 0 && (

                        <Button
                            className="mt-5"
                            onClick={() => setStep(1)}
                        >
                            Show Better Hint
                            <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>

                    )}

                </div>

                <Separator className="my-8" />

                {/* Better Hint */}

                <div>

                    <h3 className="font-semibold text-lg">
                        🟡 Better Approach
                    </h3>

                    {step >= 1 ? (

                        <>
                            <div className="mt-4 rounded-lg border bg-muted/30 p-4">

                                <p>
                                    {questionDetails?.hints?.better}
                                </p>

                            </div>

                            {step === 1 && (

                                <Button
                                    className="mt-5"
                                    onClick={() => setStep(2)}
                                >
                                    Show Optimal Hint
                                    <ChevronRight className="ml-2 h-4 w-4" />
                                </Button>

                            )}

                        </>

                    ) : (

                        <div className="mt-4 flex items-center gap-2 text-muted-foreground">

                            <Lock className="h-4 w-4" />
                            Locked

                        </div>

                    )}

                </div>

                <Separator className="my-8" />

                {/* Optimal */}

                <div>

                    <h3 className="font-semibold text-lg">
                        🔴 Optimal Approach
                    </h3>

                    {step >= 2 ? (

                        <div className="mt-4 rounded-lg border bg-muted/30 p-4">

                            <p>
                                {questionDetails?.hints?.optimal}
                            </p>

                        </div>

                    ) : (

                        <div className="mt-4 flex items-center gap-2 text-muted-foreground">

                            <Lock className="h-4 w-4" />
                            Locked

                        </div>

                    )}

                </div>

                <Separator className="my-8" />

                <div className="flex justify-between">

                    <Button
                        variant="ghost"
                        onClick={() => setMode("choice")}
                    >
                        ← Back
                    </Button>

                    <Button
                        onClick={() => setMode("solved")}
                    >
                        ✅ I Solved It Instead
                    </Button>

                </div>

            </CardContent>


        </Card>
    );
}

export default HelpView;