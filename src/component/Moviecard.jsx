import { Link } from "react-router-dom";
import Review from "./Review";

const MovieCard = (props) => {
    if (!props?.data?.poster_path) return null;

    return (
        <div className="relative w-40 sm:w-52">
            <Link to={"/review/" + props.data.id}>
                <img className="w-36 sm:w-48 h-auto m-2 p-1 hover:w-60" src={"https://image.tmdb.org/t/p/w500/" + props?.data?.poster_path} alt={props?.data?.original_title || props?.data?.original_name} />
            </Link>
            <h1 className="w-36 sm:w-48 m-2 p-1 font-bold text-sm sm:text-xl truncate">{props?.data?.original_title || props?.data?.original_name}</h1>
        </div>
    );
}

export default MovieCard;
