import { useEffect } from "react";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../redux/movieSlice";


const useFetchPopularMovies = () => {

    const dispatch = useDispatch();

    const fetchPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', TMDB_API_OPTIONS)

        const json = await data.json();

        dispatch(addPopularMovies(json.results))

    }

    useEffect(() => {
        fetchPopularMovies();
    }, [])
}

export default useFetchPopularMovies;