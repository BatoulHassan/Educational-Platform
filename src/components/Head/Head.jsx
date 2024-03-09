import {RiQuestionLine} from 'react-icons/ri';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {MdEmail} from 'react-icons/md';
import {BiSolidLockAlt} from 'react-icons/bi';
import {BsFillPersonFill} from 'react-icons/bs';
import './HeadStyle.css';

const Head = () => {
  return (
    <section className="head">
        <div className="container">
            <div className="left-head">
                <div className="info-box">
                    <RiQuestionLine/>
                    <span className='info-span'>Have a questions?</span>
                </div>  
                <div className="info-box">
                    <BsFillTelephoneFill />
                    <span className='info-span'> 
                        <span>10</span>  <span>20</span> <span>123</span> <span>456</span>
                    </span>
                </div>  
                <div className="info-box">
                    <MdEmail />
                    <span className='info-span'>
                        info@mydomain.com
                    </span>
                </div>  
            </div>  {/* End left-head */}
            
            <div className="right-head">
                <button>
                    <BiSolidLockAlt />Log In
                </button>
                <button>
                    <BsFillPersonFill />Register
                </button>
            </div> {/* End right-head */}
        </div>
    </section>
  )
}

export default Head