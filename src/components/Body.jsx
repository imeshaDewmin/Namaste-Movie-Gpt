import BrowsePage from "../pages/BrowsePage";
import Login from "../pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <BrowsePage />
        },
    ])
    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}
export default Body;