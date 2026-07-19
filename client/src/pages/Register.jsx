import { useState } from "react";
import { register } from "../api/authapi";
import { useNavigate, Link } from "react-router-dom";
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

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const validate = () => {
        const newErrors = {};

        if (!name.trim()) {
            newErrors.name = "Name is required";
        } else if (name.trim().length < 3) {
            newErrors.name = "Name must be at least 3 characters";
        }

        if (!email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
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

            await register({
                name,
                email,
                password,
            });

            navigate("/login");
        } catch (error) {
            console.log(error);
            setErrors({
                api: error.response?.data?.message || "Registration Failed",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden">

            <AnimatedBackground />

            <Card className="relative z-10 w-105 border border-white/10 bg-white/5 text-white backdrop-blur-2xl shadow-[0_0_80px_rgba(59,130,246,.15)] transition-all duration-500 hover:scale-[1.01]">

                <CardHeader className="space-y-3 text-center">

                    <CardTitle className="bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-4xl font-bold text-transparent">
                        InTHub
                    </CardTitle>

                    <CardDescription className="text-gray-300">
                        Create your account and begin your interview journey.
                    </CardDescription>

                </CardHeader>

                <CardContent>

                    <form onSubmit={handleSubmit} className="space-y-5">

                        <div className="space-y-2">

                            <Label className="text-gray-200">
                                Name
                            </Label>

                            <Input
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);

                                    setErrors((prev) => ({
                                        ...prev,
                                        name: "",
                                        api: "",
                                    }));
                                }}
                                className="border-white/10 bg-white/10 text-white placeholder:text-gray-400"
                            />

                            {errors.name && (
                                <p className="text-sm text-red-400">
                                    {errors.name}
                                </p>
                            )}

                        </div>

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

                                    setErrors((prev) => ({
                                        ...prev,
                                        email: "",
                                        api: "",
                                    }));
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
                                placeholder="Create a password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);

                                    setErrors((prev) => ({
                                        ...prev,
                                        password: "",
                                        api: "",
                                    }));
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
                            {loading ? "Creating Account..." : "Create Account"}
                        </Button>

                        <p className="text-center text-sm text-gray-300">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                className="font-medium text-cyan-400 transition hover:text-cyan-300"
                            >
                                Login
                            </Link>
                        </p>

                    </form>

                </CardContent>

            </Card>

        </div>
    );
}

export default Register;