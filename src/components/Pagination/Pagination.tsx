import "./pagination.css"

interface PaginationProps {
    currentPage: number;
    maxPages: number;
    handlePreviousBtn: () => void;
    handleNextBtn: () => void;
}

const Pagination = (props: PaginationProps) => {
    return (
        <div className="pageButtons">
            <button className="btn" onClick={props.handlePreviousBtn}>Previous</button>
            <p>{props.currentPage} of {props.maxPages}</p>
            <button className="btn" onClick={props.handleNextBtn}>Next</button>
        </div>
    )
}

export default Pagination