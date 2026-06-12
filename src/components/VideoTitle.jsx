const VideoTitle = (props) => {

    const { title, overview } = props

    return (
        <div className="w-screen aspect-video pt-[18%] px-32 absolute text-white bg-gradient-to-r from-black">
            <h1 className="font-bold text-6xl">{title}</h1>
            <h2 className="py-6 text-lg w-1/2">{overview}</h2>
            <div className="">
                <button
                    className="text-black bg-white hover:bg-gray-100 p-3 px-12 text-lg bg-opacity-80 rounded" >
                    ▶︎ Play</button>
                <button
                    className="text-black bg-white hover:bg-gray-100 p-3 px-10 text-lg bg-opacity-80 rounded mx-2" >
                    ⓘ More Info</button>
            </div>
        </div>
    )
}
export default VideoTitle;