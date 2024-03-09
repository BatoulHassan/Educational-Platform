import gallery1 from '../../assets/images/gallery1.jpeg';
import gallery22 from '../../assets/images/gallery2.jpeg';
import gallery3 from '../../assets/images/gallery3.jpeg';
import gallery4 from '../../assets/images/gallery4.jpeg';
import gallery5 from '../../assets/images/gallery5.jpeg';
import gallery6 from '../../assets/images/gallery6.jpeg';
import Socials from '../Socials/Socials';
import {BsDashLg} from 'react-icons/bs';
import {PiCopyright} from 'react-icons/pi';
import './FooterStyle.css';

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="first-row">
                <div className="about-col">
                    <h4 className='title'>About Us</h4>
                    <p className='about-para'>
                       Far far away, behined the word
                       mountain, far from the countries
                       Vokalia and Consonantia, there live
                       the blind texts.
                    </p>
                    <Socials />
                </div> {/* End about-col */}

                <div className="projects-col">
                    <h4 className='title'>Projects</h4>
                    <ul>
                        <li>Web Design</li>
                        <li>Html5</li>
                        <li>css3</li>
                        <li>jQuery</li>
                        <li>Bootstrp</li>
                    </ul>
                </div> {/* End projects-col */}

                <div className="gallery-col">
                    <h4 className='title'>Gallery</h4>
                    <div className="imgBox">
                      <img src={gallery1} alt="gallery1" loading="lazy"/>
                      <img src={gallery22} alt="gallery22" loading="lazy"/>
                      <img src={gallery3} alt="gallery3" loading="lazy"/>
                    </div>
                   <div className="imgBox">
                     <img src={gallery4} alt="gallery4" loading="lazy"/>
                     <img src={gallery5} alt="gallery5" loading="lazy"/>
                     <img src={gallery6} alt="gallery6" loading="lazy"/>
                   </div>
                </div> {/* End gallery-col */}

                <div className="contact-col">
                    <h4 className='title'>Contact</h4>
                    <p>
                        43 Raymouth Rd. Baltemoer, London <br/>
                        3910
                    </p>
                    <ul>
                      <li>+1(123)-456-7890</li>
                      <li>+1(123)-456-7890</li>
                      <li>info@mydomain.com</li>
                    </ul>
                </div> {/* End contact-col */}
            </div> {/* End first-row */}
            <div className="last-row">
                <p>
                  Copyright <PiCopyright />2023. All Rights Reserved.
                  <BsDashLg /> Designed with love by Untree.co Distributed By ThemeWagon
                </p>
            </div>  {/* End last-row */}
        </div> {/* End container-div */}
    </footer>
  )
}

export default Footer