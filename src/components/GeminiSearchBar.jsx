import { useSelector } from "react-redux";
import language from "../utils/languageConstant";
import { useRef } from "react"
import ai from "../utils/geminiai";

const GeminiSearchBar = () => {

    const selectedLang = useSelector(store => store.appConfig.selectLanguage)

    const searchText = useRef(null);

    const handleGeminiSearch = async () => {
        const response = await ai.models.generateContent({
            model: "gemini-3.5-flash",
            contents: `Act as a movie recommendation system. Suggest 5 movies only. Comma separated like in this example. Ranja, Moda Tharindu, Neera, The wife, Riverstone
        User input: ${searchText.current.value}`,
        });

        console.log(response.text);
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