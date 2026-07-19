import { useState } from "react";
import { login, getMe } from "../api/authapi";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import AnimatedBackground from "../components/AnimatedBackground";

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
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();
    const { setUser } = useAuth();

    const validate = () => {
        const newErrors = {};

        if (!email.trim()) {
            newErrors.email = "Email is required";
        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        ) {
            newErrors.email = "Please enter a valid email";
        }

        if (!password.trim()) {
            newErrors.password = "Password is required";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        try {
            setLoading(true);
            setErrors({});

            const response = await login({
                email,
                password,
            });

            localStorage.setItem("token", response.data.token);

            const me = await getMe();

            setUser(me.data);

            navigate("/dashboard");
        } catch (error) {
            console.log(error);
            setErrors({
                api: error.response?.data?.message || "Login Failed",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden">

            <AnimatedBackground />

            <Card className="relative z-10 w-105 bg-white/5 border border-white/10 backdrop-blur-2xl shadow-[0_0_80px_rgba(59,130,246,.15)] text-white">

                <CardHeader className="space-y-3 text-center">

                    <CardTitle className="bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-4xl font-bold text-transparent">
                        InTHub
                    </CardTitle>

                    <CardDescription className="text-gray-300">
                        AI-Powered Interview Preparation Platform
                    </CardDescription>

                </CardHeader>

                <CardContent>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >

                        <div className="space-y-2">

                            <Label className="text-gray-200">
                                Email
                            </Label>

                            <Input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);

                                    if (errors.email || errors.api) {
                                        setErrors((prev) => ({
                                            ...prev,
                                            email: "",
                                            api: "",
                                        }));
                                    }
                                }}
                                className="border-white/10 bg-white/10 text-white placeholder:text-gray-400"
                            />

                            {errors.email && (
                                <p className="text-sm text-red-400">
                                    {errors.email}
                                </p>
                            )}

                        </div>

                        <div className="space-y-2">

                            <Label className="text-gray-200">
                                Password
                            </Label>

                            <Input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);

                                    if (errors.password || errors.api) {
                                        setErrors((prev) => ({
                                            ...prev,
                                            password: "",
                                            api: "",
                                        }));
                                    }
                                }}
                                className="border-white/10 bg-white/10 text-white placeholder:text-gray-400"
                            />

                            {errors.password && (
                                <p className="text-sm text-red-400">
                                    {errors.password}
                                </p>
                            )}

                        </div>

                        {errors.api && (
                            <p className="text-center text-sm text-red-400">
                                {errors.api}
                            </p>
                        )}

                        <Button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-purple-500 text-white hover:bg-purple-400"
                        >
                            {loading ? "Logging..." : "Login"}
                        </Button>

                        <p className="text-center text-sm text-gray-300">
                            Don't have an account?{" "}
                            <Link
                                to="/register"
                                className="font-medium text-cyan-400 transition hover:text-cyan-300"
                            >
                                Register
                            </Link>
                        </p>

                    </form>

                </CardContent>

            </Card>

        </div>
    );
}

export default Login;