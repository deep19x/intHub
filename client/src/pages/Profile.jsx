import { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import { getDashboardStats } from "../api/statsapi";
import { getMe } from "../api/authapi";
import { useNavigate } from "react-router-dom";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import {
    User,
    Mail,
    Calendar,
    Trophy,
    Target,
    BookOpen,
    LogOut,
} from "lucide-react";
import Footer from "../components/layout/Footer";

function Profile() {

    const [user, setUser] = useState(null);
    const [stats, setStats] = useState({});

    const navigate = useNavigate();

    useEffect(() => {

        const fetchData = async () => {

            try {

                const [userResponse, statsResponse] = await Promise.all([
                    getMe(),
                    getDashboardStats()
                ]);

                setUser(userResponse.data);
                setStats(statsResponse.data.overallStats);

            } catch (error) {
                console.error(error);
            }

        };

        fetchData();

    }, []);


    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    if (!user) {
        return (
            <>
                <Navbar />
                <div className="max-w-6xl mx-auto p-8">
                    Loading...
                </div>
            </>
        );
    }

    return (
        <>
            <Navbar />

            <div className="max-w-6xl mx-auto p-8 flex-1">

                <Card className="shadow-xl rounded-2xl">

                    <CardHeader>

                        <div className="flex items-center justify-between">

                            <div className="flex items-center gap-6">

                                <Avatar className="h-24 w-24 text-3xl">

                                    <AvatarFallback className="bg-slate-900 text-white">
                                        {user?.name?.charAt(0)}
                                    </AvatarFallback>

                                </Avatar>

                                <div>

                                    <CardTitle className="text-3xl">
                                        {user.name}
                                    </CardTitle>

                                    <p className="text-muted-foreground mt-2 flex items-center gap-2">
                                        <Mail className="h-4 w-4" />
                                        {user.email}
                                    </p>

                                    <Badge className="mt-4">
                                        Interview Preparation
                                    </Badge>

                                </div>

                            </div>

                            <Button
                                variant="destructive"
                                onClick={handleLogout}
                            >
                                <LogOut className="mr-2 h-4 w-4" />
                                Logout
                            </Button>

                        </div>

                    </CardHeader>

                    <Separator />

                    <CardContent className="py-8">

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                            <Card>

                                <CardContent className="p-6 text-center">

                                    <Trophy className="mx-auto h-8 w-8 text-green-600 mb-3" />

                                    <h2 className="text-3xl font-bold">
                                        {stats.solved}
                                    </h2>

                                    <p className="text-muted-foreground">
                                        Solved
                                    </p>

                                </CardContent>

                            </Card>

                            <Card>

                                <CardContent className="p-6 text-center">

                                    <Target className="mx-auto h-8 w-8 text-yellow-600 mb-3" />

                                    <h2 className="text-3xl font-bold">
                                        {stats.attempted}
                                    </h2>

                                    <p className="text-muted-foreground">
                                        Attempted
                                    </p>

                                </CardContent>

                            </Card>

                            <Card>

                                <CardContent className="p-6 text-center">

                                    <BookOpen className="mx-auto h-8 w-8 text-blue-600 mb-3" />

                                    <h2 className="text-3xl font-bold">
                                        {stats.total}
                                    </h2>

                                    <p className="text-muted-foreground">
                                        Total Questions
                                    </p>

                                </CardContent>

                            </Card>

                            <Card>

                                <CardContent className="p-6 text-center">

                                    <User className="mx-auto h-8 w-8 text-purple-600 mb-3" />

                                    <h2 className="text-3xl font-bold">
                                        {stats.completionPercentage}%
                                    </h2>

                                    <p className="text-muted-foreground">
                                        Completion
                                    </p>

                                </CardContent>

                            </Card>

                        </div>

                        <Separator className="my-8" />

                        <div className="grid md:grid-cols-2 gap-6">

                            <Card>

                                <CardHeader>

                                    <CardTitle>
                                        Account Information
                                    </CardTitle>

                                </CardHeader>

                                <CardContent className="space-y-5">

                                    <div className="flex items-center gap-3">

                                        <User className="h-5 w-5 text-slate-500" />

                                        <div>

                                            <p className="text-sm text-muted-foreground">
                                                Name
                                            </p>

                                            <p className="font-medium">
                                                {user.name}
                                            </p>

                                        </div>

                                    </div>

                                    <div className="flex items-center gap-3">

                                        <Mail className="h-5 w-5 text-slate-500" />

                                        <div>

                                            <p className="text-sm text-muted-foreground">
                                                Email
                                            </p>

                                            <p className="font-medium">
                                                {user.email}
                                            </p>

                                        </div>

                                    </div>

                                    <div className="flex items-center gap-3">

                                        <Calendar className="h-5 w-5 text-slate-500" />

                                        <div>

                                            <p className="text-sm text-muted-foreground">
                                                Joined
                                            </p>

                                            <p className="font-medium">
                                                {new Date(user.createdAt).toLocaleDateString()}
                                            </p>

                                        </div>

                                    </div>

                                </CardContent>

                            </Card>

                            <Card>

                                <CardHeader>

                                    <CardTitle>
                                        Progress Summary
                                    </CardTitle>

                                </CardHeader>

                                <CardContent className="space-y-4">

                                    <div className="flex justify-between">
                                        <span>Solved</span>
                                        <span>{stats.solved}</span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span>Attempted</span>
                                        <span>{stats.attempted}</span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span>Todo</span>
                                        <span>{stats.todo}</span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span>Completion</span>
                                        <span>{stats.completionPercentage}%</span>
                                    </div>

                                </CardContent>

                            </Card>

                        </div>

                    </CardContent>

                </Card>

            </div>

            <Footer/>

        </>
    );
}

export default Profile;