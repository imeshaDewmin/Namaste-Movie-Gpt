import { TMDB_MOVIE_POSTER_PATH_BASE_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
    return (
        <div className="w-48 flex-shrink-0">
            <img alt="moviePoster"
                src={TMDB_MOVIE_POSTER_PATH_BASE_URL + posterPath} />
        </div>
    )
}
export default MovieCard;