import PropTypes from "prop-types";
import CourseCard from '../CourseCard/CourseCard';
import TitleOfSection from '../TitleOfSection/TitleOfSection';
import './RightCourse.css';


const RightCourse = ({courses}) => {
  
  return (
    <section className='right-course'>
        <div className="container">
            <TitleOfSection 
                  title='The right course for you'
                  subtitle='Far far away,behind the world mountains, far
                            from the countries Vokalia and Consonantia,
                            there live the blind texts.'/>
            <div className="right-course-cards">
             {
                courses.map((item,index) => (
                    <CourseCard 
                                     key={index}
                                     courseImg={item.courseImg}
                                     lessonNum={item.lessonNum}
                                     evaluation={item.evaluation}
                                     title={item.title}
                                     cosrseInfo={item.cosrseInfo}
                                     price={item.price}
                     />
                ))
             }
            </div> {/* End cards */}
        </div> {/* End container */}
    </section>
  )
}

export default RightCourse

RightCourse.propTypes = {
    courses: PropTypes.array,
   
};

