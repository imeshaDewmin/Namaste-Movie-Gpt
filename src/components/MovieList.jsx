import MovieCard from "./MovieCard";

const MovieList = (props) => {
    const { title, movies } = props;

    if (!movies) return null;

    return (
        <div className="px-5">
            <h1 className="font-bold text-2xl py-2 text-white">{title}</h1>
            <div className="flex overflow-x-scroll no-scrollbar gap-4 p-2">
                {movies.map(movie => <MovieCard
                    key={movie.id}
                    posterPath={movie.poster_path} />)}

            </div>
        </div>
    )
}
export default MovieList;