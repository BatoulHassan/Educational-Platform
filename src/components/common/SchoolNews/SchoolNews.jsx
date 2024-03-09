import './SchoolNews.css'
import cardImg1 from '../../../assets/images/cardImg1.jpg'
import cardImg2 from '../../../assets/images/cardImg2.jpg'
import SchoolCard from './SchoolCard'
import TitleOfSection from '../TitleOfSection/TitleOfSection'

const SchoolNews = () => {

  const schoolData = [
    {
      schoolImg: cardImg1, 
      title: 'Education for Tomorrow\'s Leaders', 
      date: 'June, 22, 2020',
      moreInfo: 'Admin',
      desc: 'Far far away,behind the world mountains, far from the countries Vokalia and Consonantia,there live the blind texts'
    },
    {
      schoolImg: cardImg2, 
      title: 'Enroll Your Kids this summer to get 30% off', 
      date: 'June, 22, 2020',
      moreInfo: 'Admin',
      desc: 'Far far away,behind the world mountains, far from the countries Vokalia and Consonantia,there live the blind texts'
    },
  ]

  return (
    <div className='schools-news'>
        <div className="container">
            <TitleOfSection 
                   title='School News'
                   subtitle='Far far away,behind the world mountains, far from the
                             countries Vokalia and Consonantia,there live the blind
                             texts' />
            <div className="cards-container">
               {
                schoolData.map((item,index) => (
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


            </div> {/* End cards-container */}

        </div> {/* End container */}
    </div>
  )
}

export default SchoolNews