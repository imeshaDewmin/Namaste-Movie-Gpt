import { useDispatch } from "react-redux";
import { addTrailerVideoKey } from "../redux/movieSlice";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useFetchTrailerVideo = (movieId) => {

    const dispatch = useDispatch();

    const fetchMovieVideos = async () => {
        const videos = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, TMDB_API_OPTIONS)

        const json = await videos.json();

        const trailers = json.results.filter(video => video.type === "Trailer")
        const trailer = trailers.length ? trailers[0] : json.results[0];

        const videoKey = trailer.key;

        dispatch(addTrailerVideoKey(videoKey));

    }

    useEffect(() => {
        fetchMovieVideos();
    }, [movieId])

}

export default useFetchTrailerVideo;