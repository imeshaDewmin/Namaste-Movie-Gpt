import Header from "../components/Header";
import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";
import useFetchNowPlayingMovies from "../customHooks/useFetchNowPlayingMovies";
import useFetchPopularMovies from "../customHooks/useFetchPopularMovies";
import useFetchTopRatedMovies from "../customHooks/useFetchTopRatedMovies";
import useFetchUpcomingMovies from "../customHooks/useFetchUpcomingMovies";

const BrowsePage = () => {

  useFetchNowPlayingMovies();
  useFetchPopularMovies();
  useFetchTopRatedMovies();
  useFetchUpcomingMovies();

  return (
    <div className="">
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default BrowsePage;