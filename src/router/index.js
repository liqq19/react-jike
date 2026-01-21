import Layout from "@/pages/Layout";
import Login from "@/pages/Login";
import { createBrowserRouter } from "react-router-dom";
import { AuthRouts } from "@/components/AuthRouts";
import Home from "@/pages/Home";
import Article from "@/pages/Article";
import Publish from "@/pages/Publish";

const router = createBrowserRouter([
    {
        path:"/",
        element:<AuthRouts><Layout/></AuthRouts>,
        children:[
            {
                path:"home",
                element:<Home/>
            },
            {
                path:"article",
                element:<Article/>
            },
            {
                path:"publish",
                element:<Publish/>
            }
        ]
    },
    {
        path:"/login",
        element:<Login/>
    }
])

export default router