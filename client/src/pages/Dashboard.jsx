import Navbar from "../components/layout/Navbar";
import StatCard from "../components/dashboard/StatCard";
import CompletionCard from "../components/dashboard/CompletionCard";

import {
    BadgeQuestionMark,
    CircleCheckBig,
    Flag,
} from "lucide-react";

function Dashboard() {
    return (
        <>
            <Navbar />

            <main className="mx-auto max-w-screen-2xl px-8 py-8">
                <h1 className="text-3xl font-bold">
                    Welcome back 👋
                </h1>

                {/* Statistics */}
                <div className="grid gap-6 mt-8 md:grid-cols-2 xl:grid-cols-3">
                    <StatCard
                        title="Total Questions"
                        value={30}
                        icon={<BadgeQuestionMark size={22} />}
                        description="Questions available"
                    />

                    <StatCard
                        title="Solved"
                        value={12}
                        icon={<CircleCheckBig size={22} />}
                        description="Questions solved"
                    />

                    <StatCard
                        title="Attempted"
                        value={2}
                        icon={<Flag size={22} />}
                        description="Questions attempted"
                    />
                </div>

                {/* Overall Progress */}
                <div className="mt-8">
                    <CompletionCard />
                </div>
            </main>
        </>
    );
}

export default Dashboard;