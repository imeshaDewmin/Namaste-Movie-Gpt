import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {

  const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);
  const popularMovies = useSelector(store => store.movies.popularMovies);
  const topRatedMovies = useSelector(store => store.movies.topRatedMovies);
  const upcomingMovies = useSelector(store => store.movies.upcomingMovies);

  return (
    <div className="bg-black ">
      <div className="relative -top-26 z-20px-2 overflow-hidden
          md:-top-40 md:px-12">
        <MovieList title={"Now Showing"} movies={nowPlayingMovies} />
        <MovieList title={"Popular"} movies={popularMovies} />
        <MovieList title={"Top Rated"} movies={topRatedMovies} />
        <MovieList title={"Upcoming"} movies={upcomingMovies} />
      </div>
    </div>
  )
}
export default SecondaryContainer;