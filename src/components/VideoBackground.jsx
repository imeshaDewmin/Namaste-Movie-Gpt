import { useEffect } from "react";
import { useSelector } from "react-redux";
import useFetchTrailerVideo from "../customHooks/useFetchTrailerVideo";

const VideoBackground = (props) => {

  const ytVideoKey = useSelector((store) => store.movies?.trailerVideoKey)

  const { movieId } = props;

  useFetchTrailerVideo(movieId);

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${ytVideoKey}?autoplay=1&mute=1&si=N-0gt19zTVHkHlD-`}
        title="YouTube video player"
        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  )
}
export default VideoBackground;