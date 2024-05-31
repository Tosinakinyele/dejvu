import React from 'react'
import "../styles/home.css"
import { Link } from 'react-router-dom';


import Course from './Course'
import AboutComponent from '../component/AboutComponent'


const Homepage = () => {
  return (
    <div>

      <div className='Home-Section'>

        <div className="textbox">
          <h1>World's Biggest ICT</h1>
          <p className='p-text'>We are very great at what we do as helping you to achieve<br/> all your clear objectives in context of the Tech World is<br/> our utmost priority.</p>

          <div className="login-b">
            <button><Link to="/About">Explore Now</Link></button>
          </div>


        </div>

      </div>


      <Course/>

      <AboutComponent/>

     


</div>
  )
}

export default Homepage
