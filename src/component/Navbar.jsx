import React, {useRef, useState} from 'react'
import { Link } from 'react-router-dom';
import { animate, motion } from 'framer-motion';
import './Navbar.css'
import dropdown from '../assets/droppppppppp.png'

const navMotion = {
  initial: {
    x: "-100vh",
    scale:3
  },
  animate: {
    x:0,
    scale:1,
    transition: { type: "spring", bounce: 0.4, duration: 3 },
  }
}
const Navbar = () => {

  const [menu, setMenu] = useState('Home');
  const menuRef = useRef()

  const dropdown_toggle = (e) =>{
 menuRef.current.classList.toggle('nav-menu-visible');

 e.target.classList.toggle('open');
  }

  return (
    <motion.div className='navbar'
    variants={navMotion}
    initial="initial"
    animate="animate"
    >
    <div className="nav-logo">
        <p>tosin<span>ICT</span></p>
    </div>
     <img onClick={dropdown_toggle} className='nav-dropdown' src={dropdown} alt='' />
    <ul ref={menuRef} className='nav-menu'>
        <li onClick={() => { setMenu('Home') }}><Link to="/">Home{menu === "Home" ? <hr /> : <></>}</Link></li>
        <li onClick={() => { setMenu('Course') }}><Link to="/Course">Course{menu === "Course" ? <hr /> : <></>}</Link></li>
        <li onClick={() => { setMenu('About') }}><Link to="/About">About{menu === "About" ? <hr /> : <></>}</Link></li>
        <li onClick={() => { setMenu('Contact') }}><Link to="/Contact">Contact{menu === "Contact" ? <hr /> : <></>}</Link></li>
    </ul>

    <div className="login">
        <button>Login</button>
    </div>

</motion.div>
  )
}

export default Navbar
