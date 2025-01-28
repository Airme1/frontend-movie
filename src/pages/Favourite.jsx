import "../styles/Favourite.css"
import  { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"

export default function Favourite(){

    const {favorites} = useMovieContext();

    if(favorites){
        return (
            <div className="favorites">
                <h2>Your Favourites</h2>
                <div className="movies-grid">
                    {favorites.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div className="favorites-empty">
            <h2>No Favourite Movies Yet</h2>
            <p>Start adding movies to your favourites and they'll appear here</p>
        </div>
    )
}