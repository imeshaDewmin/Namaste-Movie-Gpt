import Header from "../components/Header";
import useFetchNowPlayingMovies from "../customHooks/useFetchNowPlayingMovies";

const BrowsePage = () => {

  const nowPlayingMovies = useFetchNowPlayingMovies();

  return (
    <div className="">
      <Header />
    </div>
  )
}

export default BrowsePage;