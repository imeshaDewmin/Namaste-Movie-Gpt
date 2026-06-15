import { useSelector } from "react-redux";
import language from "../utils/languageConstant";

const GptSearchBar = () => {

    const selectedLang = useSelector(store => store.appConfig.selectLanguage)

    return (
        <div className="pt-32 flex justify-center px-4">
            <form
                className=" w-full max-w-3xl bg-black/70 backdrop-blur-md rounded-2xl shadow-2xl p-3
                    grid grid-cols-12 border border-white/10"
            >
                <input
                    type="text"
                    placeholder={language[selectedLang].gptSearchPlaceHolder}
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
                >
                    {language[selectedLang].search}
                </button>
            </form>
        </div>
    );
};

export default GptSearchBar;