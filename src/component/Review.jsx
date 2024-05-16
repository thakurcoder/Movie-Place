import VideoBg from "./VideoBg";
import Title from "./Title"
import {useParams} from 'react-router-dom';
import { API_OPTION } from "../utils/Constant";
import { async } from "@firebase/util";
import { useEffect } from "react";
import { useState } from "react";
import MovieCard from "./Moviecard";

const Review = ()=>{
    
    const params = useParams()
    const [details,setdetails] = useState([])
    const [same,setsame] = useState([])

    // console.log("params ",params.id)
    // console.log("movie ",props)

    const movieDetail = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+params.id+'?language=en-US', API_OPTION)
        const json = await data.json()
        setdetails(json)
        // console.log(json)
    }

    const similar = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+params.id+'/similar?language=en-US&page=1', API_OPTION)
        const json = await data.json()
        setsame(json.results)
        // console.log("similar",json)
        
    }
    useEffect(()=>{
        movieDetail()
        similar()
     
        
    },[params.id])
    // console.log('params ' ,params)
    if(same.length==0 || details.length==0) return
    return(
        <div className="bg-black min-h-screen text-white ">
            <div className="relative ">
            <VideoBg data={params}/>
            </div>
            <div className="w-full -mt-20 ">
            <Title data={details} />
            </div>
            <div className=" absolute p-11 flex flex-wrap gap-2 mt-4 sm:m-5 ">
                {
                    details.genres.map((e,index)=>{
                        return <span key={index} className="left-4 bg-green-500 text-sm py-1 px-2 rounded-full sm:text-xl">{e.name}</span>
                    })
                }
            </div>
            
            <div className="pt-24 block">
            <h1 className="pt-8 px-4 text-2xl   ">Sililar  Movies</h1>
            <div className="flex overflow-x-auto no-scrollbar p-4 ">
                {same.map((e,index)=> <MovieCard data={e} key={index} />)}
            </div>
            </div>
        </div>
    )
}

export default Review;