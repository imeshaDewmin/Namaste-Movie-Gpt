import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GeminiMovieSuggestions = () => {

    const movieSuggestions = useSelector(store => store.gemini);
    if (!movieSuggestions?.movieNames || !movieSuggestions?.tmdbMovies) {
        return null;
    }
    const { movieNames, tmdbMovies } = movieSuggestions;


    return (
        <div className="p-4 m-8 bg-black text-white flex gap-5 opacity-90">
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