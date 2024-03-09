import PropTypes from 'prop-types'
import StudentsCard from './StudentsCard'
import './StudentsInfo.css'

const StudentsInfo = ({students}) => {
  return (
    <section className='studentsInfo'>
        <div className="container">
            <h1 className="title">Our Students</h1>
            <p className="subtitle">
                Far far away,behind the world mountains, far
                from the countries Vokalia and Consonantia,
                there live the blind texts.
            </p>
            <div className="studentsInfo-cards">
                {
                    students.map((item, index) => (
                        <StudentsCard 
                             key={index}
                             personalImg={item.personalImg}
                             name={item.name}
                             id={item.id}
                             age={item.age}
                             country={item.country}
                             email={item.email}
                             />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default StudentsInfo

StudentsInfo.propTypes = {
    students: PropTypes.array.isRequired,
  
};