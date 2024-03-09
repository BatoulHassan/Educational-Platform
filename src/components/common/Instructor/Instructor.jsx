import {BsCheckLg} from 'react-icons/bs';
import IntructorImg from '../../../assets/images/instruc-Img.png';
import './Instructor.css';

const Instructor = () => {

  const currentPath = window.location.pathname;

  return (
    <section className={currentPath == '/' ? 'instructor homeInstructor' : 'instructor aboutInstructor'}>
        <div className='container'>
           <div className={currentPath == '/' ? "left-box-inst left-box-home" : "left-box-inst left-box-about"}>
              <h2 className='inst-title'>Become an Instructor</h2>
              <p className='inst-para'>
                Far far away, behind the world mountain, far
                from the countries Vokalia and Consonantia,
                there live the blind texts. Separated they live.
              </p>
              <ul className='inst-list'>
                  <li>
                    <BsCheckLg />
                    <p>Behind the world Mountains</p>
                  </li>
                  <li>
                    <BsCheckLg />
                    <p>Far far away Mountains</p>
                  </li>
                  <li>
                    <BsCheckLg />
                    <p>Large Language Ocean</p>
                  </li>
               </ul>
               <button>Get Started</button>
            </div>  {/* End left-box */}
            <div className="right-box-inst">
               <img src={IntructorImg} alt="IntructorImg" loading='lazy'/>
            </div>  {/* End left-box */}
        </div>
    </section>
  )
}

export default Instructor