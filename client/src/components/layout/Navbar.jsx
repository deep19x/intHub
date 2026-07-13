import { Link, NavLink, useNavigate } from 'react-router-dom';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

import { BookOpen, LayoutDashboard, User, LogOut, Book } from 'lucide-react';

import { useAuth } from '../../context/authContext';

function Navbar() {
    const navigate = useNavigate();

    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const navLinkClass = ({ isActive }) =>
        `flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${isActive
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:bg-muted hover:text-foreground"
        }`;

    return (
        <header className='sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60'>

            <div className='mx-auto max-w-screen-2xl flex h-16 items-center justify-between px-8'>

                <Link
                    to={'/dashboard'}
                    className='flex items-center gap-2 text-xl font-bold'
                >
                    <BookOpen className='h-6 w-6 text-primary' />
                    InTHub
                </Link>

                {/* Navigation */}
                <nav className='hidden md:flex items-center gap-2'>

                    <NavLink
                        to={'/dashboard'}
                        className={navLinkClass}
                    >
                        <LayoutDashboard size={18} />
                        Dashboard
                    </NavLink>

                    <NavLink
                        to={'/questions'}
                        className={navLinkClass}
                    >
                        <BookOpen size={18} />
                        Questions
                    </NavLink>

                    <NavLink
                        to={'/profile'}
                        className={navLinkClass}
                    >
                        <User size={18} />
                        Profile
                    </NavLink>

                </nav>

                {/* Avatar */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>

                        <Button
                            variant='ghost'
                            className='rounded-full p-0 h-10 w-10'
                        >
                            <Avatar>
                                <AvatarFallback>
                                    {user?.name
                                        ?.split(" ")
                                        .map((word) => word[0])
                                        .join("")
                                        .toUpperCase() || "?"}
                                </AvatarFallback>
                            </Avatar>

                        </Button>

                    </DropdownMenuTrigger>

                    <DropdownMenuContent align='end'>

                        <DropdownMenuItem asChild>

                            <Link
                                to={'/profile'}
                            >
                                <User className='mr-2 h-4 w-4' />
                                Profile

                            </Link>

                        </DropdownMenuItem>

                        <DropdownMenuItem
                            onClick={handleLogout}
                            className="text-red-500 focus:text-red-500"
                        >
                            <LogOut className="mr-2 h-4 w-4" />
                            Logout
                        </DropdownMenuItem>



                    </DropdownMenuContent>
                </DropdownMenu>

            </div>

        </header>
    );
};

export default Navbar;