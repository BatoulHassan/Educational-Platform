import PropTypes from "prop-types";
import './EducationInfo.css'

const Pagination = ({totalCards, cardsPerPage, setCurrentPage, currentPage}) => {

    let pages=[]

    for(let i=1; i <= Math.ceil(totalCards/cardsPerPage); i++) {
        pages.push(i)
    }
  return (
    <div className="pagination">
        {
            pages.map((page, index) => (
                <button 
                   className={page == currentPage ? 'active' : ''}
                   key={index}
                   onClick={() => setCurrentPage(page)}>
                    {page}
                </button>
            ))
        }
    </div>
  )
}

export default Pagination

Pagination.propTypes = {
    totalCards: PropTypes.number.isRequired,
    cardsPerPage: PropTypes.number.isRequired,
    setCurrentPage: PropTypes.func,
    currentPage: PropTypes.number.isRequired
}