import UsePopularMovie from "../utils/hooks/usepopularmovie";
import UseTopRated from "../utils/hooks/usetoprated";
import UseTvShow from "../utils/hooks/usetvshow";
import MovieCard from "./Moviecard";

const Secondary = (props)=>{
// console.log("sec ",props)


const popularmovie = UsePopularMovie()
const TopRated = UseTopRated()
// if(!TopRated) return

const tvshow =UseTvShow()
// console.log("tvshow" ,tvshow)
// if(!tvshow) return
if (!TopRated || !tvshow) return null;

// console.log("toprated ",TopRated)
// console.log("data from pop ",popularmovie)

    return(
        <div className="bg-black">
        <div className=" text-white sm:-mt-80 relative pt-52 sm:pt-0 md:pt-52 w-full">
            <h1 className="font-bold text-3xl  p-4 ">Now Playing</h1>

            <div className="flex overflow-x-scroll no-scrollbar">
            {props.data.map((e)=>{

            return <MovieCard key={e.id} data={e}/>
            })}
            
            </div>
            <h1 className="font-bold text-3xl m-2 p-2">Popular</h1>

            <div className="flex overflow-x-scroll no-scrollbar ">
            {popularmovie.map((e)=>{

            return <MovieCard key={e.id} data={e}/>
            })}
            </div>
            
            <h1 className="font-bold text-3xl m-2 p-2">Top Rated</h1>

            <div className="flex overflow-x-scroll no-scrollbar ">
            {TopRated.map((e)=>{

            return <MovieCard key={e.id} data={e}/>
            })}
            </div>
            <h1 className="font-bold text-3xl m-2 p-2">Tv Show</h1>

            <div className="flex overflow-x-scroll no-scrollbar ">
            {tvshow.map((e)=>{

            return <MovieCard key={e.id} data={e}/>
            })}
            </div>
        </div>
          


 
        </div>
    )
}

export default Secondary;