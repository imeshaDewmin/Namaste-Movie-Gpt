import { useSelector } from "react-redux";
import Header from "../components/Header";
import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";
import useFetchNowPlayingMovies from "../customHooks/useFetchNowPlayingMovies";
import useFetchPopularMovies from "../customHooks/useFetchPopularMovies";
import useFetchTopRatedMovies from "../customHooks/useFetchTopRatedMovies";
import useFetchUpcomingMovies from "../customHooks/useFetchUpcomingMovies";
import GeminiSearch from "../components/GeminiSearch";

const BrowsePage = () => {

  const geminiSearch = useSelector(store => store.gemini.showGeminiSearch);

  useFetchNowPlayingMovies();
  useFetchPopularMovies();
  useFetchTopRatedMovies();
  useFetchUpcomingMovies();

  return (
    <div className="overflow-x-hidden">
      <Header />

      {geminiSearch ? (
        <GeminiSearch />
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