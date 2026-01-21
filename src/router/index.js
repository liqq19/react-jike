import Layout from "@/pages/Layout";
import Login from "@/pages/Login";
import { createBrowserRouter } from "react-router-dom";
import { AuthRouts } from "@/components/AuthRouts";

const router = createBrowserRouter([
    {
        path:"/",
        element:<AuthRouts><Layout/></AuthRouts>
    },
    {
        path:"/login",
        element:<Login/>
    }
])

export default router