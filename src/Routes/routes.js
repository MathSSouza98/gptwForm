import React from "react";
import {
    createBrowserRouter,
} from "react-router-dom";
import SignIn from "../Pages/SignIn";
import { Questions } from "../Pages/Questions";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <SignIn />
    },
    {
        path:"/questions",
        element: <Questions />
    }
])