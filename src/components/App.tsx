import { useState } from "react"
import Filter from "./Filter/Filter"
import Pagination from "./Pagination/Pagination"
import Title from "./Title/Title"
import MovieGrid from "./MovieGrid/MovieGrid"
import useFetchMovies from "../hooks/useFetchMovies"

const App = () => {
    const [currentPage, setCurrentPage] = useState<number>(1)

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

    const { movieData, maxPages } = useFetchMovies(currentPage, "", "")
    // movie titles have $ in front of them

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