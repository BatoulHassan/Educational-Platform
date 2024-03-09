import Hero from "../../../components/common/Hero/Hero"
import heroBg from '../../../assets/images/course1.jpg'
import SecondaryTitle from "../../../components/common/SecondaryTitle/SecondaryTitle"
import Team from "../../../components/common/Team/Team"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchTeachers } from "../store/slice/teachers.slice"

const Teachers = () => {

  const teachersData = useSelector(state => state.teachers.teachers)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTeachers())
  }, [])

  //console.log(teachersData)

  return (
    <>
      <Hero heroBg={heroBg} />
      <SecondaryTitle
           title="Our Team"
           subtitle="Another free template by Untree.co.
                     Far far away,behind the world mountains, far from the
                     countries Vokalia and Consonantia,there live."
           btnContent='Explore Our Team'
       />
       <Team team={teachersData}/>
    </>
  )
}

export default Teachers

