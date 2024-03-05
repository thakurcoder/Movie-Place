import { useState } from "react"
import { useEffect } from "react"
import { API_OPTION } from "../Constant"

const UsePopularMovie = ()=>{
 
    const [PopularMovie,setPopularMovie] = useState()

    const fetchdata = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTION)
        const json = await data.json()
        // console.log("from pop ",json.results)
        
        setPopularMovie(json.results)
    }

    useEffect(()=>{
        fetchdata()
    },[])

    return PopularMovie
    
}

export default UsePopularMovie;