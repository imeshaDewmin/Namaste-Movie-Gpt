import BrowsePage from "../pages/BrowsePage";
import Login from "../pages/Login";
import Header from "./Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, displayName, email } = user;
                dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
            } else {
                dispatch(removeUser());
            }
        });

    }, [])

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