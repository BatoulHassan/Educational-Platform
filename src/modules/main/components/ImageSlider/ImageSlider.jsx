import './ImageSlider.css'
import { useEffect, useState } from 'react'
import PropTypes from "prop-types";

const ImageSlider = ({slides}) => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const autoScroll = true
    let slideInterval

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    const nextSlide = () => {
      setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1)
    }

    function auto() {
      slideInterval = setInterval(nextSlide, 3000)
    }

    useEffect(() => {
      if(autoScroll) {
        auto()
      }
      return () => clearInterval(slideInterval)
    }, [currentIndex])

  return (
   <div className="imageSlider">
     <div className='slides-container'>
        <img src={slides[currentIndex].urlSlide} alt="slideImg" loading='lazy'/>
     </div>  
     <h5>{slides[currentIndex].title}</h5>
     <p>{slides[currentIndex].job}</p>
     <div className="dotsContainer">
        {
            slides.map((slide, slideIndex) => (
                <span 
                  className={currentIndex === slideIndex ? 'dot active' : 'dot'}
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}></span>
            ))
        }
     </div> {/* End dotsContainer */}
   </div>
  )
}

export default ImageSlider

ImageSlider.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      urlSlide: PropTypes.string.isRequired,
      title: PropTypes.string,
      job: PropTypes.string
    })
  )
}