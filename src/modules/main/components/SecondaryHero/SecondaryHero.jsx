import bgImg from '../../../../assets/images/edu-bg.jpeg';
import SecondaryTitle from '../../../../components/common/SecondaryTitle/SecondaryTitle';
import './SecondaryHero.css'

const SecondaryHero = () => {
  return (
    <div className='secondary-hero'>
      <img src={bgImg} alt="bgImg" loading='lazy'/>
      <div className="overlay"></div>
      <SecondaryTitle
            title="Education for Tomorrow&apos;s Leaders"
            subtitle=" Far far away,behind the world mountains, far
                       from the countries Vokalia and Consonantia,
                       there live the blind texts."
            btnContent='Enroll Now'
       />
    </div>
  )
}

export default SecondaryHero