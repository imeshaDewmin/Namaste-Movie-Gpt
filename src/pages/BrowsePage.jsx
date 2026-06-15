import { useSelector } from "react-redux";
import GptSearch from "../components/GptSearch";
import Header from "../components/Header";
import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";
import useFetchNowPlayingMovies from "../customHooks/useFetchNowPlayingMovies";
import useFetchPopularMovies from "../customHooks/useFetchPopularMovies";
import useFetchTopRatedMovies from "../customHooks/useFetchTopRatedMovies";
import useFetchUpcomingMovies from "../customHooks/useFetchUpcomingMovies";

const BrowsePage = () => {

  const gptSearch = useSelector(store => store.gpt.showGptSearch);

  useFetchNowPlayingMovies();
  useFetchPopularMovies();
  useFetchTopRatedMovies();
  useFetchUpcomingMovies();

  return (
    <div className="overflow-x-hidden">
      <Header />

      {gptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  )
}

export default BrowsePage;