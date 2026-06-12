import { useEffect } from "react";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../redux/movieSlice";


const useFetchNowPlayingMovies = () => {

    const dispatch = useDispatch();

    const fetchNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', TMDB_API_OPTIONS)

        const json = await data.json();

        dispatch(addNowPlayingMovies(json.results))

    }

    useEffect(() => {
        fetchNowPlayingMovies();
    }, [])
}

export default useFetchNowPlayingMovies;