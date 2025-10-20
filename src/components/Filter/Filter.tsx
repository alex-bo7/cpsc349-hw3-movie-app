import "./filter.css"

interface FilterProps {
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSelection: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const Filter = (props: FilterProps) => {
    return (
        <form className="form">
            <input 
            type="text" 
            placeholder="Search for a movie..." 
            id="searchInput"
            className="input-txt"
            onChange={props.handleInputChange}
            />
            <select name="sortBy" id="sortBy" className="selection" onChange={props.handleSelection}>
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