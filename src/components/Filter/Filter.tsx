import "./filter.css"

const Filter = () => {
    return (
        <form className="form">
            <input 
            type="text" 
            placeholder="Search for a movie..." 
            id="searchInput"
            className="input-txt"
            />
            <select name="sortBy" id="sortBy" className="selection">
                <option value="">Sort By</option>
                <option value="release_date.asc">Release Date (Asc)</option>
                <option value="release_date.desc">Release Date (Des)</option>
                <option value="vote_average.asc">Rating (Asc)</option>
                <option value="vote_average.desc">Rating (Des)</option>
            </select>
        </form>
    )
}

export default Filter