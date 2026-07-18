import { useState, useEffect } from "react";

import Navbar from "../components/layout/Navbar";
import StatCard from "../components/dashboard/StatCard";
import CompletionCard from "../components/dashboard/CompletionCard";
import RecommendationCard from "../components/dashboard/RecommendationCard";
import WeakTopicsCard from "../components/dashboard/WeakTopicsCard";
import RecentActivity from "../components/dashboard/RecentActivity";

import { getDashboardStats } from "../api/statsapi";

import {
    BadgeQuestionMark,
    CircleCheckBig,
    Flag,
} from "lucide-react";
import Footer from "../components/layout/Footer";

function Dashboard() {
    const [dashboardStats, setDashboardStats] = useState(null);

    useEffect(() => {
        const fetchDashboard = async () => {
            try {
                const response = await getDashboardStats();
                setDashboardStats(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchDashboard();
    }, []);

    if (!dashboardStats) {
        return <div>Loading...</div>;
    }

    const { overallStats, topicStats, weakTopics, message } = dashboardStats;

    const topicsEntries = Object.entries(topicStats);

    const weakTopicsFilter = topicsEntries.filter(([topic, stats]) => {
        return stats.completionPercentage < 30
    });

    const top5weakTopicsFilter = weakTopicsFilter.sort((a, b) => {
        return a[1].completionPercentage - b[1].completionPercentage;
    }).slice(0, 5);

    return (
        <>
            <Navbar />

            <main className="mx-auto max-w-screen-2xl px-8 py-8 flex-1">
                <h1 className="text-3xl font-bold">
                    Welcome back 👋
                </h1>

                {/* Statistics */}
                <div className="grid gap-6 mt-8 md:grid-cols-2 xl:grid-cols-3">
                    <StatCard
                        title="Total Questions"
                        value={overallStats.total}
                        icon={<BadgeQuestionMark size={22} />}
                        description="Questions available"
                    />

                    <StatCard
                        title="Solved"
                        value={overallStats.solved}
                        icon={<CircleCheckBig size={22} />}
                        description="Questions solved"
                    />

                    <StatCard
                        title="Attempted"
                        value={overallStats.attempted}
                        icon={<Flag size={22} />}
                        description="Questions attempted"
                    />
                </div>

                {/* Overall Progress */}
                <div className="mt-8">
                    <CompletionCard
                        value={overallStats.completionPercentage}
                        solved={overallStats.solved}
                        total={overallStats.total}
                    />
                </div>

                {/* AI Coach */}
                <div className="mt-8 grid gap-6 lg:grid-cols-2">
                    <RecommendationCard
                        weakTopics={weakTopics}
                        message={message}
                    />
                    <WeakTopicsCard weakTopics={top5weakTopicsFilter} />
                </div>

                <div className="mt-8">
                    <RecentActivity />
                </div>
            </main>

            <Footer />
        </>
    );
}

export default Dashboard;