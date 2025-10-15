import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../featured/layout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {
                path: '/auth'
            },
            {
                path: '/dashboard'
            }
        ]
    }
])

export default router;