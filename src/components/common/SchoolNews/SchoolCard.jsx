import PropTypes from "prop-types";
import {IoPerson} from 'react-icons/io5'
import {FaCalendarAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './SchoolNews.css'

const SchoolCard = ({schoolImg, title, date, moreInfo, desc}) => {

  return (
    
    <div className="school-card">
                        <img className='card-img' src={schoolImg} alt="cardImg1" loading="lazy"/>
                        <div className="card-info">
                          <h3>{title}</h3>
                          <div className="date-box">
                             <FaCalendarAlt  />
                             <span>{date}</span>
                             <IoPerson />
                             <span>{moreInfo}</span>
                          </div> {/* End date-box */}
                          <p className='secondary-para'>
                           {desc}
                          </p>
                          <Link to="/#">Learn More</Link>
                    </div> {/* End card-info */}
                </div> 
  )
}

export default SchoolCard

SchoolCard.propTypes = {
    schoolImg: PropTypes.any,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    moreInfo: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
};