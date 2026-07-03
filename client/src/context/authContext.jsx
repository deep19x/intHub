import { createContext , useContext ,useEffect,useState } from "react";
import { getMe } from "../api/authapi";

const AuthContext = createContext();

export function AuthProvider({children}){
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async() => {
            const token = localStorage.getItem('token');

            if(!token){
                setLoading(false);
                return;
            }

            try {
                const response = await getMe();
                setUser(response.data);
            } catch (error) {
                console.error(error);
                localStorage.removeItem('token');
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    },[]);

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                loading,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth(){
    return useContext(AuthContext);
}