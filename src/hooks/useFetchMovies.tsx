import { useState, useEffect } from "react";
import type { MovieResult, SortQuery } from "../types/tmdb";

const TMDB_HTTPS: string = "https://api.themoviedb.org/3"

export default function useFetchMovies(
    currentPage: number, searchQuery: string, sortQuery: SortQuery) {
    const [movieData, setMovieData] = useState<MovieResult[]>([])
    const [maxPages, setMaxPages] = useState<number>(1)

    async function fetchMovies() {
        let url: URL
        if (searchQuery) {
            url = new URL(`${TMDB_HTTPS}/search/movie`)
            url.searchParams.set("query", encodeURIComponent(searchQuery))
        }
        else if (sortQuery) {
            url = new URL(`${TMDB_HTTPS}/discover/movie`);
            url.searchParams.set("sort_by", encodeURIComponent(sortQuery))
        }
        else {
            url = new URL(`${TMDB_HTTPS}/movie/popular`)
        }
        url.searchParams.set("api_key", encodeURIComponent(import.meta.env.VITE_TMDB_API_KEY))
        url.searchParams.set("page", currentPage.toString())

        try {
            const responce = await fetch(url)
            if (! responce.ok) throw new Error(`Responce Error: ${responce.status}`)
            
            const data = await responce.json()
            if (searchQuery && sortQuery) {
                if (sortQuery === "vote_average.desc") {
                    data.results.sort((a: MovieResult, b: MovieResult) => b.vote_average - a.vote_average);
                } else if (sortQuery === "vote_average.asc") {
                    data.results.sort((a: MovieResult, b: MovieResult) => a.vote_average - b.vote_average);
                } else if (sortQuery === "release_date.desc") {
                    data.results.sort((a: MovieResult, b: MovieResult) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime());
                } else if (sortQuery === "release_date.asc") {
                    data.results.sort((a: MovieResult, b: MovieResult) => new Date(a.release_date).getTime() - new Date(b.release_date).getTime());
                }
            }

            console.log(data)
            setMovieData(data.results)
            setMaxPages(data.total_pages)
        }
        catch(error) {
            console.error("Error fetching popular movies: ", error)
        } 
    }

    useEffect(() => {
        fetchMovies()
    }, [currentPage, searchQuery, sortQuery])

    return { movieData, maxPages}
}