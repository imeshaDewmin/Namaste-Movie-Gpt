import { useDispatch, useSelector } from "react-redux";
import language from "../utils/languageConstant";
import { useRef } from "react"
import ai from "../utils/geminiai";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { addTmdbMovies } from "../redux/geminiSlice";

const GeminiSearchBar = () => {

    const dispatch = useDispatch();

    const selectedLang = useSelector(store => store.appConfig.selectLanguage)

    const searchText = useRef(null);

    const searchMovieTMDB = async (movie) => {
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movie)}&include_adult=false&language=en-US&page=1`, TMDB_API_OPTIONS);
        const json = await data.json();

        if (!json.results || json.results.length === 0) return [];

        // Try exact match first
        const exactMovie = json.results.find(
            m => m.title?.toLowerCase().trim() === movie.toLowerCase().trim()
        );

        // Fall back to first result if no exact match
        return [exactMovie || json.results[0]];
    }

    const handleGeminiSearch = async () => {
        try {
            const response = await ai.models.generateContent({
                model: "gemini-2.5-flash",
                contents: `Act as a movie recommendation system. Suggest 5 movies only. Comma separated like in this example. Ranja, Moda Tharindu, Neera, The wife, Riverstone
        User input: ${searchText.current.value}`,
            });

            if (!response.text) {
                throw new Error("No response received from Gemini");
            }

            const geminiMovieResults = response.text
                .split(",")
                .map(movie => movie.trim());

            const promiseArray = geminiMovieResults.map(movie => searchMovieTMDB(movie));

            const searchResults = await Promise.all(promiseArray);

            // remove null values
            const filteredResults = searchResults.filter(Boolean);

            dispatch(addTmdbMovies({ geminiMovieResults, filteredResults }));


        } catch (error) {
            console.error("Gemini search failed:", error.message);

            alert("Failed to fetch movie recommendations. Please try again.");
        }

    };

    return (
        <div className="pt-32 flex justify-center px-4">
            <form
                className=" w-full max-w-3xl bg-black/70 backdrop-blur-md rounded-2xl shadow-2xl p-3
                    grid grid-cols-12 border border-white/10"
                onClick={(e) => e.preventDefault()}
            >
                <input
                    ref={searchText}
                    type="text"
                    placeholder={language[selectedLang].geminiSearchPlaceHolder}
                    className="
                        col-span-9 bg-transparent text-white placeholder-gray-400
                        px-5 py-4 outline-none rounded-xl border border-gray-700 focus:border-red-500
                        focus:ring-2 focus:ring-red-500 transition"
                />

                <button
                    className="
                        col-span-3 ml-3 rounded-xl bg-red-600 hover:bg-red-700
                        text-white font-semibold text-lg
                        transition-all duration-300 hover:scale-105 shadow-lg"
                    onClick={handleGeminiSearch}
                >
                    {language[selectedLang].search}
                </button>
            </form>
        </div>
    );
};

export default GeminiSearchBar;