import { useEffect, useState } from "react"
import type { MovieResult } from "../types/tmdb"
import Filter from "./Filter/Filter"
import Pagination from "./Pagination/Pagination"
import Title from "./Title/Title"
import MovieGrid from "./MovieGrid/MovieGrid"

const TMDB_HTTPS: string = "https://api.themoviedb.org/3"

const App = () => {
    const [movieData, setMovieData] = useState<MovieResult[]>([])

    async function fetchMovies() {
        const url = new URL(`${TMDB_HTTPS}/movie/popular`)
        url.searchParams.set("api_key", import.meta.env.VITE_TMDB_API_KEY)

        try {
            const responce = await fetch(url)
            const data = await responce.json()
            setMovieData(data.results)
        }
        catch(error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    return (
        <>
            {/* fns to change results data */}
            <Title />
            <Filter />
            <MovieGrid movieData={movieData} />
            {/* pages number */}
            <Pagination />
        </>
    )
}

export default App