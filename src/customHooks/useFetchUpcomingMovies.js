import { useEffect } from "react";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../redux/movieSlice";


const useFetchUpcomingMovies = () => {

    const dispatch = useDispatch();

    const fetchUpcomingVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', TMDB_API_OPTIONS)

        const json = await data.json();

        dispatch(addUpcomingMovies(json.results))

    }

    useEffect(() => {
        fetchUpcomingVideos();
    }, [])
}

export default useFetchUpcomingMovies;