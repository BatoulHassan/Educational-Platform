import PropTypes from "prop-types";
import './HeroStyle.css'

const Hero = (props) => {
  return (
    <div className="hero">
        <img src={props.heroBg} alt={props.heroBg} loading="lazy"/>
        <div className="overlay"></div>
    </div>    
  )
}

export default Hero

Hero.propTypes = {
    heroBg: PropTypes.string.isRequired,
};
