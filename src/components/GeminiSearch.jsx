import { NETFLIX_BG_IMG_URL } from "../utils/constants"
import GeminiMovieSuggestions from "./GeminiMovieSuggestions"
import GptSearchBar from "./GeminiSearchBar"

const GeminiSearch = () => {
    return (
        <>
            <div className="bg-black text-white">
                <img
                    src={NETFLIX_BG_IMG_URL}
                    alt="bg"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>
            <div className="relative z-10">
                <GptSearchBar />
                <GeminiMovieSuggestions />
            </div>

        </>
    )
}
export default GeminiSearch;