import Hero from "../../../components/common/Hero/Hero"
import heroBg from '../../../assets/images/course1.jpg'
import SecondaryTitle from "../../../components/common/SecondaryTitle/SecondaryTitle"
import StudentsInfo from "../components/StudentsInfo/StudentsInfo"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchStudents } from "../store/slice/students.slice"

const Students = () => {
  const studentsData = useSelector(state => state.students.students)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchStudents())
  }, [])

  console.log(studentsData)
  return (
    <>
      <Hero heroBg={heroBg} />
      <SecondaryTitle 
           title="Our Students"
           subtitle="Another free template by Untree.co.
                Far far away,behind the world mountains, far from the
                countries Vokalia and Consonantia,there live."
           btnContent='Explore students'
       />
       <StudentsInfo students={studentsData} />
    </>
  )
}

export default Students