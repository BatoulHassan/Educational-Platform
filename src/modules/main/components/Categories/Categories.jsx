import {GiMaterialsScience} from 'react-icons/gi';
import {MdOutlineBusinessCenter} from 'react-icons/md';
import {HiOutlineCalculator} from 'react-icons/hi';
import {BsPencil} from 'react-icons/bs';
import {CiMusicNote1} from 'react-icons/ci';
import {SiGooglemarketingplatform} from 'react-icons/si';
import {BiCamera} from 'react-icons/bi';
import {MdOutlineAnimation} from 'react-icons/md';
import './Categories.css'
import Card from './Card';

const Categories = () => {
    const cards = [
        {id: 1, icon : GiMaterialsScience, title: 'Sience', coursesNum: '1,392' },
        {id: 2, icon : MdOutlineBusinessCenter, title: 'Business', coursesNum: '3,234' },
        {id: 3, icon : HiOutlineCalculator, title: 'Finance Accounting', coursesNum: '931' },
        {id: 4, icon : BsPencil, title: 'Design', coursesNum: '7,291' },
        {id: 5, icon : CiMusicNote1, title: 'Music', coursesNum: '9,114' },
        {id: 6, icon : SiGooglemarketingplatform, title: 'Marketing', coursesNum: '2,391' },
        {id: 7, icon : BiCamera, title: 'Photography', coursesNum: '7,991' },
        {id: 8, icon : MdOutlineAnimation, title: 'Animation', coursesNum: '6,491' },
    ]
  return (
    <div className='categories'>
        <div className="container">
           <h1 className='categoryTitle'>Browse Top Category</h1>
           <div className='cards'>
             {
                cards.map((item,index) => (
                    <Card 
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        coursesNum={item.coursesNum}
                         />
                ))
             }
           </div> {/* End cards-div */}
           <p>We have more category here. <a href="/#">Browse all</a></p>
        </div>
    </div>
  )
}

export default Categories


