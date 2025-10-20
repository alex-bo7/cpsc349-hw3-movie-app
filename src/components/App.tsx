import { useEffect, useState } from "react"
import type { MovieResult } from "../types/tmdb"
import Filter from "./Filter/Filter"
import Pagination from "./Pagination/Pagination"
import Title from "./Title/Title"
import MovieGrid from "./MovieGrid/MovieGrid"

const TMDB_HTTPS: string = "https://api.themoviedb.org/3"

const App = () => {
    const [movieData, setMovieData] = useState<MovieResult[]>([])
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [maxPages, setMaxPages] = useState<number>(1)

    function handleIncrementPage() {
        if (currentPage < maxPages)
        {
            setCurrentPage(prevCurrentPage => prevCurrentPage + 1)
        }
    }

    function HandleDecrementPage() {
        if (currentPage > 1)
        {
            setCurrentPage(prevCurrentPage => prevCurrentPage - 1)
        }
    }

    async function fetchMovies() {
        const url = new URL(`${TMDB_HTTPS}/movie/popular`)
        url.searchParams.set("api_key", import.meta.env.VITE_TMDB_API_KEY)
        url.searchParams.set("page", currentPage.toString())

        try {
            const responce = await fetch(url)
            const data = await responce.json()

            console.log(data)
            setMovieData(data.results)
            setCurrentPage(data.page)
            setMaxPages(data.total_pages)
        }
        catch(error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchMovies()
    }, [currentPage])

    return (
        <>
            {/* fns to change results data */}
            <Title />
            <Filter />
            <MovieGrid movieData={movieData} />
            <Pagination 
                currentPage={currentPage} 
                maxPages={maxPages} 
                handlePreviousBtn={HandleDecrementPage}
                handleNextBtn={handleIncrementPage}/>
        </>
    )
}

export default App