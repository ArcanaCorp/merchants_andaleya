import { createRoot } from "react-dom/client";
import Providers from "./app/providers";
import { RouterProvider } from "react-router-dom";
import router from "./app/routers";

createRoot(document.getElementById('root')).render(
    <>
        <Providers>
            <RouterProvider router={router} />
        </Providers>
    </>
)