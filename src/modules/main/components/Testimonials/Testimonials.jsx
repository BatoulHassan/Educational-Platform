import ImageSlider from '../ImageSlider/ImageSlider'
import slide1 from '../../../../assets/images/team2.jpg'
import slide2 from '../../../../assets/images/team1.jpg'
import slide3 from '../../../../assets/images/team3.jpg'
import slide4 from '../../../../assets/images/course22.jpeg'
import './Testimonials.css'
import TitleOfSection from '../../../../components/common/TitleOfSection/TitleOfSection'

const Testimonials = () => {

  const slides = [
    {urlSlide: slide1 , title: 'John Doe', job: 'CEO.Founder'},
    {urlSlide: slide2, title: 'Leanne Graham', job: 'Developer'},
    {urlSlide: slide3, title: 'Ervin Howell', job: 'IT Manager'},
    {urlSlide: slide4, title: 'Patricia Lebsack', job: 'Assistat Manager'},
   ]

  return (
    <div className='testimonials'>
        <div className="container">
            <TitleOfSection 
                    title='Testimonials'
                    subtitle='Far far away,behind the world mountains, far from the
                              countries Vokalia and Consonantia,there live the blind
                              texts.Separated they live in Bookmarksgrove right at the
                              coast of the Semantics, a large language ocean.' />
            <ImageSlider slides={slides} /> 
           
        </div> 
    </div>
  )
}

export default Testimonials


