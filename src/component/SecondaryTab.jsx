import UsePopularMovie from "../utils/hooks/usepopularmovie";
import UseTopRated from "../utils/hooks/usetoprated";
import UseTvShow from "../utils/hooks/usetvshow";
import MovieCard from "./Moviecard";

const Secondary = (props) => {
    const popularmovie = UsePopularMovie();
    const TopRated = UseTopRated();
    const tvshow = UseTvShow();

    if (!TopRated || !tvshow) return null;

    return (
        <div className=" bolck bg-black text-white py-20 pl-5">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold mb-10">Now Playing</h1>
                <div className="flex overflow-x-scroll no-scrollbar mb-10">
                    {props.data.map((e) => <MovieCard key={e.id} data={e} />)}
                </div>

                <h1 className="text-3xl font-bold mb-10">Popular</h1>
                <div className="flex overflow-x-scroll no-scrollbar mb-10">
                    {popularmovie.map((e) => <MovieCard key={e.id} data={e} />)}
                </div>

                <h1 className="text-3xl font-bold mb-10">Top Rated</h1>
                <div className="flex overflow-x-scroll no-scrollbar mb-10">
                    {TopRated.map((e) => <MovieCard key={e.id} data={e} />)}
                </div>

                <h1 className="text-3xl font-bold mb-10">TV Shows</h1>
                <div className="flex overflow-x-scroll no-scrollbar">
                    {tvshow.map((e) => <MovieCard key={e.id} data={e} />)}
                </div>
            </div>
        </div>
    );
}

export default Secondary;
