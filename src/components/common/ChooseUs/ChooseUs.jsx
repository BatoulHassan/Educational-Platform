import choose from '../../../assets/images/choose3.jpg'
import rightImg from '../../../assets/images/rightchoose.jpeg'
//import add from '../../../assets/images/addIcon.png'
import { RiAddFill } from "react-icons/ri";
import './ChooseUs.css'

const ChooseUs = () => {
  return (
    <div className='chooseUs'>
      <div className="container">
        <div className="leftChoose">
           <img src={choose} alt="choose" loading='lazy'/>
        </div>
        <div className="rightChoose">
          <h2 className='chooseTitle'>Why choose us</h2>
          <p className='choose-subtitle'>
              Far far away,behind the world mountains, far from the
              countries Vokalia and Consonantia,there live the blind
              texts.
            </p>
            <div className='titleWithBg'>
              <span className='textDash'></span>
              <span className='textSpan'>Good Teachers and Staffs</span>
            </div> {/* End titleWithBg */}
            <div className="chooseInfo">
              <div className='leftChooseInfo'>
                 <img src={rightImg} alt="rightImg" />
              </div> {/* End leftChooseInfo */}
              <div className='rightChooseInfo'>
                <p className='firstChoosePara'>
                   Far far away,behind the world mountains, far from the
                   countries Vokalia and Consonantia,there live the blind
                   texts.
                </p>
                <p className='secondChoosePara'>
                   Separated they live in Bookmarksgrove right at the
                   coast of the Semantics, a large language ocean.
                </p>
              </div> {/* End rightChooseInfo */}
            </div> {/* End chooseInfo */}
           <div className="moreInfoContainer">
              <div className="moreInfo">
                  <RiAddFill />
                  <span>We value good characters</span>
              </div> {/* End moreInfo */}
              <div className="moreInfo">
                  <RiAddFill />
                  <span>We value good characters</span>
              </div> {/* End moreInfo */}
           </div> {/* End moreInfoContainer */}
        </div> {/* End rightChoose */}
      </div> {/* End container */}
    </div>
  )
}

export default ChooseUs