import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GeminiMovieSuggestions = () => {

    const movieSuggestions = useSelector(store => store.gemini);
    if (!movieSuggestions?.movieNames || !movieSuggestions?.tmdbMovies) {
        return null;
    }
    const { movieNames, tmdbMovies } = movieSuggestions;


    return (
        <div className="p-3 bg-black/90 text-white rounded-lg space-y-6
            md:p-5  mx-2 md:mx-8 md:flex md:m-10">
            {movieNames.map((movieName, index) =>
                <MovieList
                    key={movieName}
                    title={movieName}
                    movies={tmdbMovies[index]} />
            )}
        </div>
    )
}
export default GeminiMovieSuggestions;