import React from "react";
import { useState } from "react";

import { DataContext } from "./DataContext";

const DataContextProvider = ({children})=>{
    const [data,setdata] = useState()
    const [login,setlogin] = useState(false)
    const [GptSearch,setGptSearch] = useState(false)
    const [gptMovieResult,setgptMovieResult] = useState([])
    return(
        <DataContext.Provider value={{data,setdata,login,setlogin,GptSearch,setGptSearch,gptMovieResult,setgptMovieResult}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContextProvider;