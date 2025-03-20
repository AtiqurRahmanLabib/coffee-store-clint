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
                loader: () => fetch('http://localhost:5000/coffee')
            },
            {
                path: '/AddNewCoffee',
                element: <AddNewCoffee></AddNewCoffee>,
            },
            {
                path: '/updateCoffee',
                element: <UpdateCoffee></UpdateCoffee>,
                loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params._id}`)
            }
        ]
    },
]);

export default router;