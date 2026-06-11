import { NETFLIX_LOGO_URL, NETFLIX_USER_ICON } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

    const user = useSelector((store) => store.user)

    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/");
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <div className="absolute z-20 bg-gradient-to-b from-black w-screen flex justify-between">
            <img className="w-44 m-3 p-3 bg-gradient-to-b from-black" src={NETFLIX_LOGO_URL} alt="logo"></img>

            {user && (
                <div className="flex p-2 m-2">
                    <img className="w-9 h-9" src={NETFLIX_USER_ICON} alt="userIcon" />
                    <span className="m-2 p-2 font-bold text-sm text-black tracking-wide drop-shadow-md">
                        {user.displayName}
                    </span>
                    <button className="text-white font-bold rounded-lg" onClick={handleSignOut}>Sign Out</button>
                </div>
            )}
        </div>
    )
}

export default Header;