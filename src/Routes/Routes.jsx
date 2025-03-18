import { createBrowserRouter } from "react-router-dom";
import Error from "../Error/Error";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import AddNewCoffee from "../Pages/AddNewCoffee/AddNewCoffee";
import UpdateCoffee from "../Pages/UpdateCoffee/UpdateCoffee";


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
            {
                path: '/AddNewCoffee',
                element: <AddNewCoffee></AddNewCoffee>,
            },
            {
                path: '/updateCoffee',
                element: <UpdateCoffee></UpdateCoffee>,
            }
        ]
    },
]);

export default router;