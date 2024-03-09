import Hero from "../../../components/common/Hero/Hero"
import heroBg from '../../../assets/images/course1.jpg'
import SecondaryTitle from "../../../components/common/SecondaryTitle/SecondaryTitle"
import RightCourse from "../../../components/common/RightCourse/RightCourse"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchCourses } from "../store/slice/courses.slice"

const Courses = () => {

  const coursesData = useSelector(state => state.courses.courses)
   const dispatch = useDispatch()

   useEffect(() => {
    dispatch(fetchCourses())
  }, [])

  console.log(coursesData)

  return (
    <>
    <Hero heroBg={heroBg} />
    <SecondaryTitle
             title="Courses"
             subtitle="Another free template by Untree.co.
                       Far far away,behind the world mountains, far from the
                       countries Vokalia and Consonantia,there live."
             btnContent='Explore courses' />
    <RightCourse courses={coursesData}/> 
    </>
  )
}

export default Courses