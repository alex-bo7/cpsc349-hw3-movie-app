import { useEffect } from "react"
import Filter from "./Filter/Filter"
import Pagination from "./Pagination/Pagination"
import Title from "./Title/Title"

const TMDB_HTTPS = "https://api.themoviedb.org/3"

const App = () => {

    async function fetchMovies() {
        const url = new URL(`${TMDB_HTTPS}/movie/popular`)
        url.searchParams.set("api_key", import.meta.env.VITE_TMDB_API_KEY)

        try {
            const responce = await fetch(url)
            const data = await responce.json()
            console.log(data)
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
            <Title />
            <Filter />
            <Pagination />
        </>
    )
}

export default App