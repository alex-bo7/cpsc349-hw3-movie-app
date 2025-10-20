import { useState } from "react"
import type { SortQuery } from "../types/tmdb"
import Filter from "./Filter/Filter"
import Pagination from "./Pagination/Pagination"
import Title from "./Title/Title"
import MovieGrid from "./MovieGrid/MovieGrid"
import useFetchMovies from "../hooks/useFetchMovies"

const App = () => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [searchQuery, setSearchQuery] = useState<string>("")
    const [sortQuery, setSortQuery] = useState<SortQuery>("" as SortQuery)

    function handleIncrementPage() {
        if (currentPage < maxPages) {
            setCurrentPage(prevCurrentPage => prevCurrentPage + 1)
        }
    }

    function HandleDecrementPage() {
        if (currentPage > 1) {
            setCurrentPage(prevCurrentPage => prevCurrentPage - 1)
        }
    }

    function handleSearchQuery(e: React.ChangeEvent<HTMLInputElement>) {
        setSearchQuery(e.target.value)
    }

    function handleSortQuery(e: React.ChangeEvent<HTMLSelectElement>) {
        setSortQuery(e.target.value as SortQuery)
    }

    const { movieData, maxPages } = useFetchMovies(currentPage, searchQuery, sortQuery)

    return (
        <>
            <Title />
            <Filter handleInputChange={handleSearchQuery} handleSelection={handleSortQuery}/>
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