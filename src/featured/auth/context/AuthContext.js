import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    const contextValue = {
        user,
        loading,
        setUser,
        setLoading
    }

    return (
        <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
    )

}

export const useAuth = () => useContext(AuthContext);