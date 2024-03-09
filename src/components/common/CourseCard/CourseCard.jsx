import PropTypes from "prop-types";
import {PiBookOpenTextLight} from 'react-icons/pi';
import {AiTwotoneStar} from 'react-icons/ai';
import './CourseCard.css'

const CourseCard = (props) => {

  return (
    <div className="right-course-card">
                    <img src={props.courseImg} alt="courseImg1" />
                    <div className="info-box">
                      <div className="lesson-row">
                          <div className="lessons-num-box">
                              <PiBookOpenTextLight />
                              <span>{props.lessonNum} lesson</span>
                          </div> {/* End lessons-num-box */}
                          <div className="lessons-star-box">
                             <AiTwotoneStar />
                             <span>{props.evaluation}</span>
                          </div> {/* End lessons-star-box */}
                      </div>  {/* End lesson-row */}
                      <h4 className='course-title'>{props.title}</h4>
                      <p className='course-para'>
                        {props.cosrseInfo}
                      </p>
                      <div className="price-box">
                        <span>${props.price}</span>
                        <a href="/#">Learn More</a>
                      </div> {/* End price-box */}
                    </div> {/* End info-box */}
                </div> 
  )
}

export default CourseCard

CourseCard.propTypes = {
    courseImg: PropTypes.any.isRequired,
    lessonNum: PropTypes.string.isRequired,
    evaluation: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cosrseInfo: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
};