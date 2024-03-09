import {CiMusicNote1} from 'react-icons/ci';
import {BiMath} from 'react-icons/bi';
import {GoBook} from 'react-icons/go';
import {LuBook} from 'react-icons/lu';
import {SlReload} from 'react-icons/sl';
import {SlEarphones} from 'react-icons/sl';
import './Allclassess.css';
import ClassessCard from './ClassessCard';
import TitleOfSection from '../TitleOfSection/TitleOfSection';

const AllClassess = () => {

    const classessInfo = [
        {id: 1, icon: CiMusicNote1, title: 'Music Class', moreInfo: "Far far away,behind the world mountains, far from the countries Vokalia and Consonantia, there live the blind texts." },
        {id: 2, icon: BiMath, title: 'Math Class', moreInfo: "Far far away,behind the world mountains, far from the countries Vokalia and Consonantia, there live the blind texts." },
        {id: 3, icon: GoBook, title: 'English Class', moreInfo: "Far far away,behind the world mountains, far from the countries Vokalia and Consonantia, there live the blind texts." },
        {id: 4, icon: LuBook, title: 'Reading for kids', moreInfo: "Far far away,behind the world mountains, far from the countries Vokalia and Consonantia, there live the blind texts." },
        {id: 5, icon: SlReload, title: 'History Class', moreInfo: "Far far away,behind the world mountains, far from the countries Vokalia and Consonantia, there live the blind texts." },
        {id: 6, icon: SlEarphones, title: 'Music', moreInfo: "Far far away,behind the world mountains, far from the countries Vokalia and Consonantia, there live the blind texts." },
    ]
  return (
    <section className='allClassess'>
        <div className="container">
            <TitleOfSection
                     title='We have best Education'
                     subtitle='Far far away,behind the world mountains, far
                               from the countries Vokalia and Consonantia,
                               there live the blind texts.' />
            <div className="classess-cards">
                {
                    classessInfo.map((item, indexItem) => (
                        <ClassessCard
                                      key={indexItem}
                                      icon={item.icon}
                                      title={item.title}
                                      moreInfo={item.moreInfo}
                                      />
                    ))
                }
                
            </div>
        </div>
    </section>
  )
}

export default AllClassess