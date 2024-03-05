
import Usemoviedata from "../utils/hooks/usemoviedata";
import { useContext } from "react";
import DataContextProvider from "./Context/DataContextpro";
import { DataContext } from "./Context/DataContext";
import Maincontainer from "./Maincontainer";
import Secondary from "./SecondaryTab";
import Gptpage from "./Gptpage";

const Browse = ()=>{

    
    const {GptSearch} = useContext(DataContext)
    const {data} = useContext(DataContext)
    const {login} = useContext(DataContext)
    // console.log("data ",data )
    Usemoviedata()
    // console.log("data ",data )
    // console.log("gpt ",GptSearch)
    if(login==false) return window.location.href = "/"

    

    if (!data) return 
  
    return(
        <div>
            {GptSearch ? <Gptpage/> : <>
            <Maincontainer data={data} />
            <Secondary data={data}/>
            </>}
            {/* <Maincontainer data={data} />
            <Secondary data={data}/> */}
        </div>
    )
}

export default Browse;