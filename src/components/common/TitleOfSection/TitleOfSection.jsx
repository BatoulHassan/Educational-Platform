import PropTypes from "prop-types";
import './TitleOfSection.css'

const TitleOfSection = (props) => {

  return (
    <div className="titleOfSec">
          <h1 className="title">{props.title}</h1>
          <p className="subtitle">
           {props.subtitle}
          </p>
    </div>
  )
}

export default TitleOfSection

TitleOfSection.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
};