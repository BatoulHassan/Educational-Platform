import PropTypes from "prop-types";
import  './TeamCard.css'
import { Link } from "react-router-dom";
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter } from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'

const TeamCard = ({personalImg, title, job, desc, facebook, twitter, linkedin}) => {
  return (
    <div className="teamCard">
            <img src={personalImg} alt="teamImg1" />
            <h3 className="teamCardTitle">{title}</h3>
            <p className="teamCardJob">{job}</p>
            <p className="teamCardDesc">
             {desc}
            </p>
            <div className="socials">
                <Link to={facebook}  className="iconLink"> 
                   <FaFacebookF />
                </Link>
                <Link to={twitter}  className="iconLink"> 
                   <AiOutlineTwitter />
                </Link>
                <Link to={linkedin}  className="iconLink"> 
                   <FaLinkedinIn />
                </Link>
            </div>
    </div>
  )
}

export default TeamCard

TeamCard.propTypes = {
    personalImg: PropTypes.any,
    title: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    facebook: PropTypes.string.isRequired,
    twitter: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
};