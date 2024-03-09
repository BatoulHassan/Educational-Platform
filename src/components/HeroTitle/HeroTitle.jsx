import PropTypes from "prop-types";
import './HeroTitle.css'

const HeroTitle = ({title, subtitle, btnContent}) => {
  return (
    <div className='heroTitle'>
      <h4>{title}</h4>
      <h1>{subtitle}</h1>
      <button>{btnContent}</button>
    </div>
  )
}

export default HeroTitle

HeroTitle.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    btnContent: PropTypes.string.isRequired,
};