import PropTypes from "prop-types";
import './Allclassess.css';

const ClassessCard = (props) => {

    
  return (
            <div className="classess-card">
                    <span className='span-icon'>
                      <props.icon />
                    </span>
                    <h3 className="classess-card-title">{props.title}</h3>
                    <p className="classess-card-para">
                      {props.moreInfo}
                    </p>
            </div> 
  )
}

export default ClassessCard

ClassessCard.propTypes = {
    // key: PropTypes.string.isRequired,
    icon: PropTypes.func,
    title: PropTypes.string.isRequired,
    moreInfo: PropTypes.string.isRequired,
};