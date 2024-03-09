import PropTypes from "prop-types";
import './Categories.css'

const Card = (props) => {
  return (
    <div className="card">
             <div className="left-box">
                 <span className='card-icon'>{<props.icon/>}</span>
             </div>
             <div className="right-box">
                 <h3>{props.title}</h3>
                 <span className='num-span'>{props.coursesNum}</span>
                 <span className='courses-span'>courses</span>
             </div>
         </div>  
  )
}

export default Card

Card.propTypes = {
    icon: PropTypes.func,
    title: PropTypes.string.isRequired,
    coursesNum: PropTypes.string.isRequired,
};
