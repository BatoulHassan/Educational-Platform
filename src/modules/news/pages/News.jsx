import Hero from "../../../components/common/Hero/Hero"
import newsHeroImg from '../../../assets/images/choose2.jpeg'
import SecondaryTitle from "../../../components/common/SecondaryTitle/SecondaryTitle"
import EducationInfo from "../components/EducationInfo/EducationInfo"

const News = () => {

  return (

    <>
     <Hero heroBg={newsHeroImg}/>
      <SecondaryTitle
             title="News"
             subtitle="Another free template by Untree.co.
                       Far far away,behind the world mountains, far from the
                       countries Vokalia and Consonantia,there live."
             btnContent='Explore courses' />
      <EducationInfo />
    </>
  )
}

export default News