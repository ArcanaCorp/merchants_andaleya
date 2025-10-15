import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "../featured/auth/context/AuthContext";
export default function Providers({ children }) {

    const queryClient = new QueryClient();

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </QueryClientProvider>
        </>
    )
}