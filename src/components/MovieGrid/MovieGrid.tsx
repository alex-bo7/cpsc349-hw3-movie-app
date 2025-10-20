import type { MovieResult } from "../../types/tmdb";
import MovieCard from "../MovieCard/MovieCard";
import "./movie-grid.css"

interface MovieGridProps {
    movieData: MovieResult[]
}

const MovieGrid = (props: MovieGridProps) => {
    return (
        <div id="movieCards">
            {props.movieData.map(movie => (
                <MovieCard 
                    key={movie.id}
                    poster_path={movie.poster_path}
                    title={movie.title}
                    release_date={movie.release_date}
                    vote_average={movie.vote_average}
                />
            ))}
        </div>
    )
}

export default MovieGrid