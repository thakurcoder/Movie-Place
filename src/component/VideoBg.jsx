import { useState } from "react";
import { useEffect } from "react";
import { API_OPTION } from "../utils/Constant";

const VideoBg = (props)=>{
    // console.log("props ",props.data.id)

    const [trailerVideo,settrailerVideo] = useState()

    const trailer = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+ props.data.id +'/videos?language=en-US', API_OPTION)
        const json = await data.json()
        // console.log("video ",json)
        const filtertrailer = json.results.filter((e)=>{
            return e.type="Trailer"
        })

        // console.log("filtertrailer ",filtertrailer)
        settrailerVideo(filtertrailer[0])

    }

    useEffect(()=>{
        trailer()
    })

    if(!trailerVideo) return

    return(
        <div>
            <iframe
            className=" w-full sm:h-full aspect-video h-80   "
               src={`https://www.youtube.com/embed/${trailerVideo.key}?&autoplay=1&mute=1&controls=0&loop=1`} title="YouTube video player" frameBorder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    )
}

export default VideoBg;