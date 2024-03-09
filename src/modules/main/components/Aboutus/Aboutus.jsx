import './AboutusStyle.css';
import aboutusImg from '../../../../assets/images/course6.jpg';
import { MdCheck } from "react-icons/md";

const Aboutus = () => {
  return (
    <div className='about-us'>
        <div className="container">
            <div className="left-about">
                <h2 className='aboutus-title'>About Us</h2>
                <p className='aboutus-para'>
                Far far away,behind the world mountains, far from the
                countries Vokalia and Consonantia,there live the blind
                texts.Separated they live in Bookmarksgrove right at the
                coast of the Semantics, a large language ocean.
                </p>
                <ul className='aboutus-ul'>
                    <li className='aboutus-item'>
                        <MdCheck style={{color: '#1661bfd9', marginRight: '5px'}} />
                        Separated they live
                    </li>
                    <li className='aboutus-item'>
                        <MdCheck style={{color: '#1661bfd9', marginRight: '5px'}} />
                        Bookmarksgrove right at the coast
                    </li>
                    <li className='aboutus-item'>
                        <MdCheck style={{color: '#1661bfd9', marginRight: '5px'}} />
                        Large language ocean
                    </li>
                </ul>
                <div className='info-container'>
                    <div className="aboutus-info">
                       <h2 className='number'>204+</h2>
                       <p className='info-para'>
                         No. Students
                       </p>
                    </div>

                    <div className="aboutus-info">
                       <h2 className='number'>0</h2>
                       <p className='info-para'>
                         No. Teachers
                       </p>
                    </div>

                    <div className="aboutus-info">
                       <h2 className='number'>0</h2>
                       <p className='info-para'>
                         No. Awards
                       </p>
                    </div>
                </div> {/* End info-container */} 
                <div className="aboutus-btns">
                    <button className='admission-btn'>Admission</button>
                    <button className='learn-btn'>Learn More</button>
                </div> {/* End aboutus-btns */} 
            </div> {/* End left-box */} 

            <div className="right-about">
              <img src={aboutusImg} alt="aboutusImg" />
              <div className='bg-box'></div>
            </div> {/* End right-box */} 
        </div> {/* End container */} 
    </div>
  )
}

export default Aboutus