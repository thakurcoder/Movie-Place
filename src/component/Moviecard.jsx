import {Link} from "react-router-dom"
import Review from "./Review"
const MovieCard = (props)=>{
    // console.log("from movie card ",props )

    

    if(!props?.data?.poster_path) return
    return(
        <div className="sm:w-52  w-40"> 
            
          <Link to={"/review/"+props.data.id}>
            <img 
           
             className="sm:w-48  w-36 sm:h-auto  sm:m-2 sm:p-2 m-5 p-1 hover:w-60" src={"https://image.tmdb.org/t/p/w500/"+props?.data?.poster_path}/>
        </Link>
            <h1 className="sm:w-48 sm:m-2 w-36 sm:p-2 m-1 p-1 sm:font-bold sm:text-xl text-sm text-wrap">{props?.data?.original_title ||props?.data?.original_name}</h1>
            {/* <p>{props.data.overview}</p> */}
        </div>
    )
}

export default MovieCard;