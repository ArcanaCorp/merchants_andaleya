import { useEffect } from "react"
import { useAuth } from "./auth/context/AuthContext"
import { Outlet, useNavigate } from "react-router-dom";

export default function RootLayout () {

    const { user, loading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading) {
            if (user) {
                navigate('/dashboard')
            } else {
                navigate('/login')
            }
        }
    }, [user, loading, navigate]);

    if (loading) return <h1>Cargando...</h1>;

    return <Outlet/>

}