import { Link } from "react-router-dom";
import { Home, SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";

function NotFound() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
            <div className="text-center">
                <div className="mb-8 flex justify-center">
                    <div className="rounded-full bg-white/5 p-8">
                        <SearchX className="h-20 w-20 text-cyan-400" />
                    </div>
                </div>

                <h1 className="mb-2 text-7xl font-bold text-white">
                    404
                </h1>

                <h2 className="mb-4 text-3xl font-semibold text-white">
                    Page Not Found
                </h2>

                <p className="mx-auto mb-8 max-w-md text-gray-400">
                    The page you're looking for doesn't exist or may have been moved.
                </p>

                <Link to="/dashboard">
                    <Button className="bg-cyan-500 hover:bg-cyan-600">
                        <Home className="mr-2 h-4 w-4" />
                        Back to Dashboard
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default NotFound;