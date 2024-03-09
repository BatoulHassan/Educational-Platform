import {AiOutlineInstagram} from 'react-icons/ai';
import {RiTwitterFill} from 'react-icons/ri';
import {BiLogoFacebook} from 'react-icons/bi';
import {TiSocialLinkedin} from 'react-icons/ti';
import {BiLogoPinterest} from 'react-icons/bi';
import {PiGoogleChromeLogoLight} from 'react-icons/pi';
import './SocialsStyle.css';

const Socials = () => {
  return (
    <div>
        <h4 className='socials-title'>Connect</h4>
        <div className='socials-container'>
        <span> <AiOutlineInstagram style={{fontSize: '14px'}}/> </span>
        <span> <RiTwitterFill style={{fontSize: '14px'}}/> </span>
        <span> <BiLogoFacebook style={{fontSize: '14px'}}/> </span>
        <span> <TiSocialLinkedin style={{fontSize: '14px'}}/> </span>
        <span> <BiLogoPinterest style={{fontSize: '14px'}}/> </span>
        <span> <PiGoogleChromeLogoLight style={{fontSize: '14px'}}/> </span>
    </div>
    </div>
  )
}

export default Socials