import './NavbarStyle.css';
import { NavLink } from 'react-router-dom';
import { MdMenu } from "react-icons/md";
import { useState } from 'react';

const Navbar = () => {

  const [toggle, setToggle] = useState(false)
  const [fix, setFix] = useState(false)

  const toggleMenue = () => {
    setToggle(!toggle)
  }

  const setFixedNav = () => {
    if (window.scrollY >= 30) {
        setFix(true)
    }else {
      setFix(false)
    }
  }

  window.addEventListener('scroll', setFixedNav)

  return (
    <section className={fix ? 'navbar fixedNav' : 'navbar'}>
      <div className={toggle ? 'container mdContainer' : 'container'}>
        <div className="logo-container">
          <h1>Learner</h1>
        </div>

        <div className="nav">
          <ul className={toggle ? 'nav-list colList' : 'nav-list'}>
            <li className='nav-item' onClick={toggleMenue}><NavLink to='/platform'>Home</NavLink></li>
            <li className='nav-item' onClick={toggleMenue}><NavLink to='/platform/news'>News</NavLink></li>
            <li className='nav-item' onClick={toggleMenue}><NavLink to='/platform/about'>About</NavLink></li>
            <li className='nav-item' onClick={toggleMenue}><NavLink to='/platform/courses'>Courses</NavLink></li>
            <li className='nav-item' onClick={toggleMenue}><NavLink to='/platform/students'>Students</NavLink></li>
            <li className='nav-item' onClick={toggleMenue}><NavLink to='/platform/teachers'>Teachers</NavLink></li>
            <li className='nav-item' onClick={toggleMenue}>Contact</li>
          </ul>
        </div>

        <button className='nav-btn'>Enroll now</button>
        <button className='menueBtn' onClick={toggleMenue}>
           <MdMenu className='menuIcon' />
        </button>
      </div> {/*End container-div */}
    </section>
  )
}

export default Navbar