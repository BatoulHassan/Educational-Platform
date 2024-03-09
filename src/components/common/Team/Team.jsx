import PropTypes from "prop-types";
import './Team.css'
import TitleOfSection from "../TitleOfSection/TitleOfSection";
import TeamCard from "../TeamCard/TeamCard";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

const Team = (props) => {

    var settings_slide = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        // autoplay: true,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            
            }
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
        ]
      };

  return (
    <div className='team'>
      <div className='container'>
         <TitleOfSection 
              title='Our Team' 
              subtitle='Far far away,behind the world mountains, far
                        from the countries Vokalia and Consonantia,
                        there live the blind texts.'/>
         <Slider {...settings_slide}>
          {
             props.team.map((item,index) => (
              <TeamCard
                 key={index} 
                 personalImg={item.personalImg} 
                 title={item.title} 
                 job={item.job} 
                 desc={item.desc}
                 facebook={item.facebook}
                 twitter={item.twitter}
                 linkedin={item.linkedin}
              />
            ))
          }

        </Slider>                
      </div>
    </div>
  )
}

export default Team

Team.propTypes = {
    team: PropTypes.array,
 
};