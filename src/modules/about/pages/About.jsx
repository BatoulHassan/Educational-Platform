import Hero from "../../../components/common/Hero/Hero"
import aboutHeroImg from '../../../assets/images/course33.jpg'
import SecondaryTitle from "../../../components/common/SecondaryTitle/SecondaryTitle"
import Instructor from "../../../components/common/Instructor/Instructor"
import teamImg1 from '../../../assets/images/team1.jpg'
import teamImg2 from '../../../assets/images/team2.jpg'
import teamImg3 from '../../../assets/images/team3.jpg'
import teamImg4 from '../../../assets/images/team4.jpg'
import teamImg5 from '../../../assets/images/team5.jpg'
import teamImg6 from '../../../assets/images/team6.jpeg'

import Team from "../../../components/common/Team/Team"
import AllClassess from "../../../components/common/AllClassess/AllClassess"
import ChooseUs from "../../../components/common/ChooseUs/ChooseUs"


const About = () => {

  const team = [
    {
      personalImg: teamImg1,
      title: 'Mina Collins',
      job: 'Teacher in Math',
      desc: 'Far far away, behind the world mountain, far from the countries Vokalia and Consonantia, there live the blind texts.',
      facebook: '/#',
      twitter: '/#',
      linkedin: '/#'
    },
    {
      personalImg: teamImg2, 
      title: 'Anderson Matthew', 
      job: 'Teacher in Music', 
      desc: 'Far far away, behind the world mountain, far from the countries Vokalia and Consonantia, there live the blind texts.',
      facebook: '/#',
      twitter: '/#',
      linkedin: '/#'
    },
    {
      personalImg: teamImg3, 
      title: 'Cynthia Misso', 
      job: 'Teacher in English', 
      desc: 'Far far away, behind the world mountain, far from the countries Vokalia and Consonantia, there live the blind texts.',
      facebook: '/#',
      twitter: '/#',
      linkedin: '/#'
    },

    {
      personalImg: teamImg4,
      title: 'Terry Medhurst',
      job: 'Teacher in History',
      desc: 'Far far away, behind the world mountain, far from the countries Vokalia and Consonantia, there live the blind texts.',
      facebook: '/#',
      twitter: '/#',
      linkedin: '/#'
    },
    {
      personalImg: teamImg5, 
      title: 'Alison Reichert', 
      job: 'Teacher in Sience', 
      desc: 'Far far away, behind the world mountain, far from the countries Vokalia and Consonantia, there live the blind texts.',
      facebook: '/#',
      twitter: '/#',
      linkedin: '/#'
    },
    {
      personalImg: teamImg6, 
      title: 'Oleta Abbott', 
      job: 'Teacher in Math', 
      desc: 'Far far away, behind the world mountain, far from the countries Vokalia and Consonantia, there live the blind texts.',
      facebook: '/#',
      twitter: '/#',
      linkedin: '/#'
    },
  ]

  return (
    <>
       <Hero heroBg={aboutHeroImg}/>
      <SecondaryTitle 
             title="About Us"
             subtitle="Another free template by Untree.co.
                       Far far away,behind the world mountains, far from the
                       countries Vokalia and Consonantia,there live."
             btnContent='Explore courses' />
      <Instructor />
      <Team team={team} />
      <AllClassess />
      <ChooseUs />
    </>
  )
}

export default About