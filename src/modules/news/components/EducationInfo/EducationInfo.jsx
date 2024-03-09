import './EducationInfo.css'
import educ1 from '../../../../assets/images/educ1.jpg'
import educ2 from '../../../../assets/images/educ2.jpeg'
import educ3 from '../../../../assets/images/educ3.jpeg'
import educ4 from '../../../../assets/images/educ4.jpg'
import educ5 from '../../../../assets/images/educ5.jpg'
import educ6 from '../../../../assets/images/educ6.jpg'
import SchoolCard from '../../../../components/common/SchoolNews/SchoolCard'
import { useState } from 'react'
import Pagination from './Pagination'

const EducationInfo = () => {

  const eduData = [
    {
      schoolImg: educ1,
      title: 'Education for Tomorrow\'s Leaders', 
      date: 'June, 22, 2020',
      moreInfo: 'Admin',
      desc: 'Far far away,behind the world mountains, far from the countries Vokalia and Consonantia,there live the blind texts'
     },
    {
      schoolImg: educ2, 
      title: 'Education for Tomorrow\'s Leaders', 
      date: 'June, 22, 2020',
      moreInfo: 'Admin',
      desc: 'Far far away,behind the world mountains, far from the countries Vokalia and Consonantia,there live the blind texts'
    },
    {
      schoolImg: educ3, 
      title: 'Education for Tomorrow\'s Leaders', 
      date: 'June, 22, 2020',
      moreInfo: 'Admin',
      desc: 'Far far away,behind the world mountains, far from the countries Vokalia and Consonantia,there live the blind texts'
    },
    {
      schoolImg: educ4, 
      title: 'Enroll Your Kids this summer to get 30% off', 
      date: 'June, 22, 2020',
      moreInfo: 'Admin',
      desc: 'Far far away,behind the world mountains, far from the countries Vokalia and Consonantia,there live the blind texts'
    },
    {
      schoolImg: educ5, 
      title: 'Enroll Your Kids this summer to get 30% off', 
      date: 'June, 22, 2020',
      moreInfo: 'Admin',
      desc: 'Far far away,behind the world mountains, far from the countries Vokalia and Consonantia,there live the blind texts'
    },
    {
      schoolImg: educ6, 
      title: 'Enroll Your Kids this summer to get 30% off', 
      date: 'June, 22, 2020',
      moreInfo: 'Admin',
      desc: 'Far far away,behind the world mountains, far from the countries Vokalia and Consonantia,there live the blind texts'
    },
    {
      schoolImg: educ1,
      title: 'Education for Tomorrow\'s Leaders', 
      date: 'June, 22, 2020',
      moreInfo: 'Admin',
      desc: 'Far far away,behind the world mountains, far from the countries Vokalia and Consonantia,there live the blind texts'
     },
    {
      schoolImg: educ2, 
      title: 'Education for Tomorrow\'s Leaders', 
      date: 'June, 22, 2020',
      moreInfo: 'Admin',
      desc: 'Far far away,behind the world mountains, far from the countries Vokalia and Consonantia,there live the blind texts'
    },
    {
      schoolImg: educ3, 
      title: 'Education for Tomorrow\'s Leaders', 
      date: 'June, 22, 2023',
      moreInfo: 'Admin',
      desc: 'Far far away,behind the world mountains, far from the countries Vokalia and Consonantia,there live the blind texts'
    },
    {
      schoolImg: educ4, 
      title: 'Enroll Your Kids this summer to get 30% off', 
      date: 'June, 22, 2023',
      moreInfo: 'Admin',
      desc: 'Far far away,behind the world mountains, far from the countries Vokalia and Consonantia,there live the blind texts'
    },
    {
      schoolImg: educ5, 
      title: 'Enroll Your Kids this summer to get 30% off', 
      date: 'June, 22, 2023',
      moreInfo: 'Admin',
      desc: 'Far far away,behind the world mountains, far from the countries Vokalia and Consonantia,there live the blind texts'
    },
    {
      schoolImg: educ6, 
      title: 'Enroll Your Kids this summer to get 30% off', 
      date: 'June, 22, 2023',
      moreInfo: 'Admin',
      desc: 'Far far away,behind the world mountains, far from the countries Vokalia and Consonantia,there live the blind texts'
    },
  ]

  const [currentPage, setCurrentPage] = useState(1)
  const [cardsPerPage] = useState(6)
  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;
  const currentCards = eduData.slice(firstCardIndex, lastCardIndex)

  return (
    <div className='educationInfo'>
      <div className="container">
        <div className="eduCards">
          {
            currentCards.map((item,index) => (
              <SchoolCard 
                  key={index} 
                  schoolImg={item.schoolImg}
                  title={item.title}
                  date={item.date}
                  moreInfo={item.moreInfo}
                  desc={item.desc}
                  />
            ))
          }
          <Pagination 
               totalCards={eduData.length} 
               cardsPerPage={cardsPerPage} 
               setCurrentPage={setCurrentPage} 
               currentPage={currentPage} />
               
        </div> {/* End eduCards*/}
      </div> {/* End container*/}
    </div>
  )
}

export default EducationInfo