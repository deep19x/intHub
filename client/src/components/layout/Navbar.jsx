import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

import {
    BookOpen,
    LayoutDashboard,
    User,
    LogOut,
    Menu,
    X
} from 'lucide-react';

import { useAuth } from '../../context/authContext';


function Navbar() {

    const navigate = useNavigate();

    const { user, logout } = useAuth();

    const [open, setOpen] = useState(false);


    const handleLogout = () => {
        logout();
        navigate('/login');
    };


    const navLinkClass = ({ isActive }) =>
        `flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
            isActive
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
        }`;


    return (

        <header className='sticky top-0 z-50 border-b bg-background/95 backdrop-blur'>

            <div className='mx-auto max-w-screen-2xl flex h-16 items-center justify-between px-4 md:px-8'>


                {/* Logo */}
                <Link
                    to="/dashboard"
                    className='flex items-center gap-2 text-xl font-bold'
                >
                    <BookOpen className='h-6 w-6 text-primary'/>
                    InTHub
                </Link>



                {/* Desktop Navigation */}
                <nav className='hidden md:flex items-center gap-2'>

                    <NavLink
                        to="/dashboard"
                        className={navLinkClass}
                    >
                        <LayoutDashboard size={18}/>
                        Dashboard
                    </NavLink>


                    <NavLink
                        to="/questions"
                        className={navLinkClass}
                    >
                        <BookOpen size={18}/>
                        Questions
                    </NavLink>


                    <NavLink
                        to="/profile"
                        className={navLinkClass}
                    >
                        <User size={18}/>
                        Profile
                    </NavLink>

                </nav>



                <div className="flex items-center gap-3">


                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        className="md:hidden"
                        onClick={() => setOpen(!open)}
                    >
                        {
                            open 
                            ? <X size={24}/>
                            : <Menu size={24}/>
                        }
                    </Button>



                    {/* Avatar Dropdown */}
                    <DropdownMenu>

                        <DropdownMenuTrigger asChild>

                            <Button
                                variant="ghost"
                                className='rounded-full p-0 h-10 w-10'
                            >

                                <Avatar>

                                    <AvatarFallback>
                                        {
                                            user?.name
                                            ?.split(" ")
                                            .map(word => word[0])
                                            .join("")
                                            .toUpperCase()
                                            || "?"
                                        }
                                    </AvatarFallback>

                                </Avatar>

                            </Button>

                        </DropdownMenuTrigger>


                        <DropdownMenuContent align="end">


                            <DropdownMenuItem asChild>

                                <Link to="/profile">

                                    <User className="mr-2 h-4 w-4"/>
                                    Profile

                                </Link>

                            </DropdownMenuItem>


                            <DropdownMenuItem
                                onClick={handleLogout}
                                className="text-red-500"
                            >

                                <LogOut className="mr-2 h-4 w-4"/>
                                Logout

                            </DropdownMenuItem>


                        </DropdownMenuContent>


                    </DropdownMenu>


                </div>


            </div>



            {/* Mobile Menu */}
            {
                open && (

                    <div className="md:hidden border-t px-4 py-4 flex flex-col gap-2">


                        <NavLink
                            to="/dashboard"
                            className={navLinkClass}
                            onClick={() => setOpen(false)}
                        >

                            <LayoutDashboard size={18}/>
                            Dashboard

                        </NavLink>



                        <NavLink
                            to="/questions"
                            className={navLinkClass}
                            onClick={() => setOpen(false)}
                        >

                            <BookOpen size={18}/>
                            Questions

                        </NavLink>



                        <NavLink
                            to="/profile"
                            className={navLinkClass}
                            onClick={() => setOpen(false)}
                        >

                            <User size={18}/>
                            Profile

                        </NavLink>



                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-red-500 hover:bg-muted"
                        >

                            <LogOut size={18}/>
                            Logout

                        </button>


                    </div>

                )
            }


        </header>

    );
}


export default Navbar;