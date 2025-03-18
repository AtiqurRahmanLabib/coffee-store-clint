import { createBrowserRouter } from "react-router-dom";
import Error from "../Error/Error";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/home",
                element: <Home></Home>,
            },

        ]
    },
]);

export default router;