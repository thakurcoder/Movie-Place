import { useState } from "react"
import { useEffect } from "react"
import { API_OPTION } from "../Constant"

const UseTopRated = ()=>{

    const [topRated,settopRated] = useState()

    const fetchdata = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTION)
        const json = await data.json()
        // console.log("toprated json ",json)
        settopRated(json.results)


    }

    useEffect(()=>{
        fetchdata()
    },[])

    return topRated
}

export default UseTopRated;