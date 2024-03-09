import heroBg from '../../../assets/images/course1.jpg'
import Hero from "../../../components/common/Hero/Hero"
import HeroTitle from '../../../components/HeroTitle/HeroTitle'
import AllClassess from '../../../components/common/AllClassess/AllClassess'
import ChooseUs from '../../../components/common/ChooseUs/ChooseUs'
import Instructor from '../../../components/common/Instructor/Instructor'
import Aboutus from '../components/Aboutus/Aboutus'
import Categories from '../components/Categories/Categories'
import Pricing from '../components/Pricing/Pricing'
import SchoolNews from '../../../components/common/SchoolNews/SchoolNews'
import SecondaryHero from '../components/SecondaryHero/SecondaryHero';
import Testimonials from '../components/Testimonials/Testimonials'

const Main = () => {
  
  return (
    <>
       <Hero heroBg={heroBg}/>
       <HeroTitle title='Watch the video' subtitle='Education is the Mother of Leadership' btnContent='Explore courses' />
       <Categories />
       <Instructor />
       <AllClassess />
       <SecondaryHero />
       <Aboutus />
       <SchoolNews />
       <Pricing />
      <Testimonials />
      <ChooseUs /> 
    </>
  )
}

export default Main