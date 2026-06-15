import { NETFLIX_BG_IMG_URL } from "../utils/constants"
import GptMovieSuggestions from "./GptMovieSuggestions"
import GptSearchBar from "./GptSearchBar"

const GptSearch = () => {
    return (
        <div className="bg-black text-white">
            <img
                src={NETFLIX_BG_IMG_URL}
                alt="bg"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <GptSearchBar />
            <GptMovieSuggestions />
        </div>
    )
}
export default GptSearch