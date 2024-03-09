import PropTypes from "prop-types";
import './StudentsInfo.css'

const StudentsCard = (props) => {
  return (
    <div className='student-card'>
      <div className='outer-box'>
        <div className="inner-box">
           <img src={props.personalImg} alt="stu" />
            <div className="student-box">
                <h4 className="title">{props.name}</h4>
                <p className="stu-id">{props.id}</p>
            </div> {/* End student-box */}
        </div> {/* End inner-box */}
       </div>
        <div className="info-box">
                <ul>
                    <li className="stu-item">Age: {props.age}</li>
                    <li className="stu-item">Country: {props.country}</li>
                    <li className="stu-item">Email: {props.email}</li>
                </ul>
                <button className="stu-btn">More Info</button>
        </div>
        
    </div>
  )
}

export default StudentsCard

StudentsCard.propTypes = {
    personalImg: PropTypes.any.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
};