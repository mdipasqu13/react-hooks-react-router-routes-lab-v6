import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";

const router = createBrowserRouter([
    {
        path: "/"
        element: <Home/>
    },
    {
        path:"/movie"
        element: <Movie/>
    },
    {
        path:"directors"
        element: <Directors/>
    },
    {
        path:"actos"
        element: <Directors/>
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render();
