import { Separator } from "@/components/ui/separator";
import { Mail } from "lucide-react";

function Footer() {
    return (
        <footer className="mt-10 border-t bg-background">
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

                <div>
                    <h2 className="text-xl font-bold">InTHub</h2>
                    <p className="text-sm text-muted-foreground">
                        AI-powered interview preparation platform.
                    </p>
                </div>

                <div className="flex items-center gap-6 text-sm">

                    <a
                        href="https://github.com/YOUR_GITHUB_USERNAME"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-blue-600 transition"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-blue-600 transition"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="mailto:YOUR_EMAIL@gmail.com"
                        className="flex items-center gap-2 hover:text-blue-600 transition"
                    >
                        <Mail className="h-4 w-4" />
                        Contact
                    </a>

                </div>

            </div>
        </footer>
    );
}

export default Footer;