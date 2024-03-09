import TitleOfSection from '../../../../components/common/TitleOfSection/TitleOfSection'
import PricingCard from './PricingCard'
import './PricingStyle.css'

const Pricing = () => {

  const pricingCardInfo = [
    {id:1, title: 'Starter', price: '50.99', paragraph: ' Far far away,behind the world mountains, far from the countries Vokalia and Consonantia,there live the blind texts.'  } ,
    {id:2, title: 'Business', price: '99.99', paragraph: ' Far far away,behind the world mountains, far from the countries Vokalia and Consonantia,there live the blind texts.'  } ,
    {id:3, title: 'Premium', price: '199.99', paragraph: ' Far far away,behind the world mountains, far from the countries Vokalia and Consonantia,there live the blind texts.'  } ,
  ]

  return (
    <div className='pricing'>
        <div className="container">
            <TitleOfSection  
                  title='Pricing'
                  subtitle='Far far away,behind the world mountains, far from the
                            countries Vokalia and Consonantia,there live the blind
                            texts'/>
            <div className="cards-container">
              {
                pricingCardInfo.map((item,index) => (
                  <PricingCard key={index} title={item.title} price={item.price} paragraph={item.paragraph} />
                ))
              }
            
            </div> {/* End cards-container */}
        </div> {/* End container */}
    </div>
  )
}

export default Pricing