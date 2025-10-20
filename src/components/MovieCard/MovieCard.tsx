import "./movie-card.css"

interface MovieCardProps {
    poster_path: string | null;
    title: string;
    release_date: string;
    vote_average: number;
}
const baseUrl: string = "https://image.tmdb.org/t/p/w200";
const placeholderImgUrl: string = "https://placehold.co/200x300?text=No+Poster+Image"

const MovieCard = (props: MovieCardProps) => {
    const fullImageUrl: string = baseUrl + props.poster_path;
    
    return (
        <article className="movie-card">
            <img
                src={(props.poster_path) ? fullImageUrl : placeholderImgUrl}
                className="movie-img"
                alt="Movie poster for ${title}"
            />
            <h3 className="movie-title">${props.title}</h3>
            <p className="movie-release">Release Date: ${props.release_date}</p>
            <p className="movie-rating">Rating: ${props.vote_average}</p>
        </article>
    )
}

export default MovieCard