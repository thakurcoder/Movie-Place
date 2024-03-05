import { useState } from "react"
import { useEffect } from "react"
import { API_OPTION } from "../Constant"

const UseTvShow = ()=>{
 
    const [tvshow,settvshow] = useState()

    const fetchdata = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', API_OPTION)
        const json = await data.json()
        settvshow(json.results)
    }

    useEffect(()=>{
        fetchdata()
    },[])

    return tvshow
}

export default UseTvShow;