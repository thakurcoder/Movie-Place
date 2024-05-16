import { useState, useEffect } from "react";
import { API_OPTION } from "../utils/Constant";

const VideoBg = (props) => {
    const [trailerVideo, setTrailerVideo] = useState();

    const trailer = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/' + props.data.id + '/videos?language=en-US', API_OPTION);
        const json = await data.json();
        const filterTrailer  = json.results.filter((e) => {
            return e.type === "Trailer";
        });
        // console.log("filtertrailer ",filterTrailer[0])
        setTrailerVideo(filterTrailer[0]);
    }

    useEffect(() => {
        trailer();
    }, [props.data.id]);

    // console.log("trailerVideo ",trailerVideo)
    if (!trailerVideo) return null;

    return (
        <div className="block w-full h-80 sm:h-screen overflow-hidden">
            <div className="absolute inset-0 opacity-70"></div>
            <iframe
    className="block inset-0 w-full h-full object-cover"
    src={`https://www.youtube.com/embed/${trailerVideo.key}?&autoplay=1&mute=1&controls=0&loop=1&modestbranding=1`}
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    allowFullScreen
></iframe>
        </div>
    );
}

export default VideoBg;
