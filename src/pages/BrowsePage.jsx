import Header from "../components/Header";
import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";
import useFetchNowPlayingMovies from "../customHooks/useFetchNowPlayingMovies";

const BrowsePage = () => {

  const nowPlayingMovies = useFetchNowPlayingMovies();

  return (
    <div className="">
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default BrowsePage;