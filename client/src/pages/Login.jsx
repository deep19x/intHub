import { useState } from "react";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({
            email,
            password,
        });
    };

    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950">
            {/* Background gradients */}

            <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500 opacity-20 blur-3xl"></div>

            <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-purple-600 opacity-20 blur-3xl"></div>

            <div className="absolute top-1/3 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>

            {/* Grid overlay */}

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e293b_0%,#020617_70%)]"></div>

            {/* Card */}

            <Card className="relative z-10 w-105 border-white/10 bg-white/5 text-white backdrop-blur-xl shadow-2xl">
                <CardHeader className="space-y-3 text-center">
                    <CardTitle className="text-4xl font-bold bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        InTHub
                    </CardTitle>

                    <CardDescription className="text-gray-300">
                        AI-Powered Interview Preparation Platform
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                            <Label className="text-gray-200">
                                Email
                            </Label>

                            <Input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="border-white/10 bg-white/10 text-white placeholder:text-gray-400"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label className="text-gray-200">
                                Password
                            </Label>

                            <Input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="border-white/10 bg-white/10 text-white placeholder:text-gray-400"
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-cyan-500 text-black hover:bg-cyan-400"
                        >
                            Login
                        </Button>

                        <p className="text-center text-sm text-gray-300">
                            Don't have an account?{" "}
                            <span className="cursor-pointer text-cyan-400 hover:text-cyan-300">
                                Register
                            </span>
                        </p>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}

export default Login;