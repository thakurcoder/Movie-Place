import { useState } from "react";
import { useContext, createContext } from "react";

const Contex = createContext();


export const Authprovider = ({children})=>{
    const [islogin, setislogin] = useState(false);
    const [GptSearch,setGptSearch] = useState(false)

    return(
        <Contex.Provider value={{islogin,setislogin,GptSearch,setGptSearch}}>
            {children}
        </Contex.Provider>
    )
}