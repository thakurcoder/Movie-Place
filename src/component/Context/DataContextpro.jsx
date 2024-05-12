import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { DataContext } from "./DataContext";

const DataContextProvider = ({children})=>{
    const [data,setdata] = useState()
    const [GptSearch,setGptSearch] = useState(false)
    const [gptMovieResult,setgptMovieResult] = useState([])
    const [login,setlogin] = useState(()=>{
        try{

           const item =  window.localStorage.getItem('user_login')
        //    console.log("item ",item)
           return item!=null? JSON.parse(item):false
        }catch{
            return false
        }
    })
    // const localfunction = ()=>{
    //     const [login,setlogin] = useState(()=>{
    //         try{
    //             const item = window.localStorage.getItem("user_login")
    //             return item!=null?item:false
    //         }catch{
    //             return false
    //         }
    //     })
    // }    

    // useEffect(()=>{
    //     localfunction()
    // })

    return(
        <DataContext.Provider value={{data,setdata,login,setlogin,GptSearch,setGptSearch,gptMovieResult,setgptMovieResult}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContextProvider;