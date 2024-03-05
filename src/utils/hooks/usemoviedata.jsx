import { useState } from "react";
import { useEffect } from "react";
import { API_OPTION } from "../Constant/";
import { useContext } from "react";
import DataContextProvider from "../../component/Context/DataContextpro";
import { DataContext } from "../../component/Context/DataContext";



const Usemoviedata = ()=>{

    const {setdata} = useContext(DataContext)

    const fetchdata = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', API_OPTION)
        const json = await data.json()
    //    console.log(json)
       setdata(json.results)
    }

    useEffect(()=>{
        fetchdata()
    },[])
}

export default Usemoviedata;