import { useContext } from "react";
import { useRef, useState ,useEffect} from "react";
import { API_OPTION } from "../utils/Constant";
import Openai from "../utils/Openai";
import { DataContext } from "./Context/DataContext";
import MovieCard from "./Moviecard";

const GptSearch = ()=>{

    const searchtext = useRef("");

    const [moviename,setmoviename] = useState([])
    const {gptMovieResult,setgptMovieResult} = useContext(DataContext)


    const handleGptClick = async ()=>{
        //   console.log(searchtext.current.value)
        // open ai
        const gptQuarry = "Act as a Movie recommendation system and suggest some movie for quarry : "+ searchtext.current.value + ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: "+ searchtext.current.value +" king, don, hello, koi mil gaya, ham app ke hain kon. Also add " + searchtext.current.value + "to the list at the first place";
        const chatCompletion = await Openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuarry }],
            model: 'gpt-3.5-turbo',
          });
        
   
          const moviename = chatCompletion.choices[0].message.content.split(", ")
          setmoviename(moviename)
        //   console.log("movie name ",moviename )

          const promiseFetchdaata = moviename.map((movie)=>fetchsearchdata(movie))
    
          const resultdata = await Promise.all(promiseFetchdaata)
        //   console.log("resul data ",resultdata)
          setgptMovieResult(resultdata);
    }

    const fetchsearchdata = async(name)=>{
        const data =await fetch('https://api.themoviedb.org/3/search/movie?query='+name+'&include_adult=false&language=en-US&page=1', API_OPTION)
        const json = await data.json()
        // console.log("json ",json)
        return json.results

    }
    // console.log("movie result ",gptMovieResult)
 

    return(
        <div className=" bg-slate-700 w-screen h-screen absolute ">
            <form 
            className="  sm:mt-[13%] sm:ml-[30%] mt-[35%] "
             onSubmit={(e)=>e.preventDefault()} >
                <input
                ref={searchtext}
                required
                 className="h-11  sm:w-96 w-52 m-2 p-2 sm:text-xl"  type="search" placeholder="What would you like to watch today?"/>
                <button onClick={handleGptClick} className="bg-green-500 h-11 sm:w-40 sm:text-xl m-2 p-2 font-bold">Search</button>
            </form>

            <div className="bg-slate-700 text-white">
                {gptMovieResult.length>1 &&
                    gptMovieResult.map((e)=>{
                       return <div className="flex overflow-x-scroll no-scrollbar">
                        { e.map((inner,index)=>{
                            // console.log(index,inner)
                            return <MovieCard key={index} data={inner} />
                            
                        })
                     } 
                     </div>
                    })
                }
            </div>

        </div>
    )
}

export default GptSearch;