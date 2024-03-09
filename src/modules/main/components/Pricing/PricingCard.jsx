import './PricingStyle.css'
import PropTypes from "prop-types";

const PricingCard = ({title, price, paragraph}) => {
  return (
    <div className="pricing-card">
      <h2 className='prCardTitle'>{title}</h2>
      <div className="cardPriceBox">
        <span className='cardPrice'>{price}</span>
        <span className='prMonth'>/month</span>
      </div> {/* End cardPriceBox */}
      <p className='pricingPara'>
        {paragraph}
      </p>
      <button className='prCardBtn'>get started</button>
  </div> 
  )
}

export default PricingCard

PricingCard.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
};