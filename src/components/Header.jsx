import { NETFLIX_LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
        <div className="absolute z-20">
            <img className="w-44 m-3 p-3 bg-gradient-to-b from-black" src={NETFLIX_LOGO_URL} alt="logo"></img>
        </div>

    )
}
export default Header;