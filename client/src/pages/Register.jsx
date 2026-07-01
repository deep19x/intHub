import { useState } from "react";
import { register } from "../api/authapi";
import { useNavigate,Link } from "react-router-dom";

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

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            await register({
                name,
                email,
                password
            });

            alert("Registration Successful");

            navigate('/login');
        } catch (error) {
            console.log(error);
            alert(error.response?.data?.message || "Registration Failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950">
            {/* Background Glows */}
            <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500 opacity-20 blur-3xl"></div>

            <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-purple-600 opacity-20 blur-3xl"></div>

            <div className="absolute top-1/3 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e293b_0%,#020617_70%)]"></div>

            {/* Register Card */}
            <Card className="relative z-10 w-105 border-white/10 bg-white/5 text-white backdrop-blur-xl shadow-2xl">
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
                                onChange={(e) => setName(e.target.value)}
                                className="border-white/10 bg-white/10 text-white placeholder:text-gray-400"
                            />
                        </div>

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
                                placeholder="Create a password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="border-white/10 bg-white/10 text-white placeholder:text-gray-400"
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-purple-500 text-white hover:bg-purple-400"
                            disabled={loading}
                        >
                            {loading ? "Creating Account" : "Create Account"}
                        </Button>

                        <p className="text-center text-sm text-gray-300">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                className="text-cyan-400 hover:text-cyan-300"
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