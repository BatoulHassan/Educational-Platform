import PropTypes from "prop-types";
import './SecondaryTitle.css';

const SecondaryTitle = ({title, subtitle, btnContent}) => {

  const currentPath = window.location.pathname;

  return (
    <div className={currentPath == "/" ? "secondary-title" : "secondary-title withPadding"}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <button className="secondary-btn">{btnContent}</button>
    </div>
  )
}

export default SecondaryTitle


SecondaryTitle.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    btnContent: PropTypes.string.isRequired,
};