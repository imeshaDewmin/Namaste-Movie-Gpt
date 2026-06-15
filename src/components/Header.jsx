import { NETFLIX_LOGO_URL, NETFLIX_USER_ICON } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { toggleGeminiSearchView } from "../redux/geminiSlice";
import { changeLanguage } from "../redux/configSlice";

const Header = () => {

    const geminiSearch = useSelector(store => store.gemini.showGeminiSearch);

    const user = useSelector(store => store.user);

    const selectedLanguage = useSelector(store => store.appConfig.selectLanguage)

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleGeminiSearchClick = () => {
        dispatch(toggleGeminiSearchView());
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, displayName, email } = user;
                dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });

        return () => unsubscribe();

    }, [])

    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            // An error happened.
        });
    }

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
    }


    return (
        <div className="absolute z-20 bg-gradient-to-b from-black w-screen flex justify-between">
            <img className="w-44 m-3 p-3 bg-gradient-to-b from-black" src={NETFLIX_LOGO_URL} alt="logo"></img>

            {user && (
                <div className="flex items-center gap-3 mr-6">
                    {geminiSearch && (
                        <select
                            className="p-2 m-2 text-white bg-gray-800 hover:bg-gray-900 cursor-pointer"
                            value={selectedLanguage}
                            onChange={handleLanguageChange}>
                            <option value="en">English</option>
                            <option value="sinhala">Sinhala</option>
                            <option value="tamil">Tamil</option>
                        </select>
                    )}

                    <button className="py-2 px-4 m-2
                     bg-indigo-500 hover:bg-indigo-600
                      rounded-lg text-white font-bold"
                        onClick={handleGeminiSearchClick}>{geminiSearch ? "Home" : "🔍︎ Gemini Search"}</button>

                    <img className="w-9 h-9" src={NETFLIX_USER_ICON} alt="userIcon" />
                    <span className="text-white text-sm font-medium">
                        {user.displayName}
                    </span>
                    <button className="text-white text-sm hover:text-red-500 transition" onClick={handleSignOut}>Sign Out</button>
                </div>
            )}
        </div>
    )
}

export default Header;