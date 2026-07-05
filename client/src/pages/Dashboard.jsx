import Navbar from "../components/layout/Navbar";
import StatCard from "../components/dashboard/StatCard";
import CompletionCard from "../components/dashboard/CompletionCard";
import { getOverallStats } from "../api/statsapi";
import { useState, useEffect } from "react";

import {
    BadgeQuestionMark,
    CircleCheckBig,
    Flag,
} from "lucide-react";


function Dashboard() {
    const [stats,setStats] = useState({});
    
    useEffect(() => {
        const fetchStats = async() => {
            try {
                const response = await getOverallStats();
                setStats(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchStats();
    },[]);
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
                        value={stats.total}
                        icon={<BadgeQuestionMark size={22} />}
                        description="Questions available"
                    />

                    <StatCard
                        title="Solved"
                        value={stats.solved}
                        icon={<CircleCheckBig size={22} />}
                        description="Questions solved"
                    />

                    <StatCard
                        title="Attempted"
                        value={stats.attempted}
                        icon={<Flag size={22} />}
                        description="Questions attempted"
                    />
                </div>

                {/* Overall Progress */}
                <div className="mt-8">
                    <CompletionCard value={stats.completionPercentage} solved={stats.solved} total={stats.total}/>
                </div>
            </main>
        </>
    );
}

export default Dashboard;