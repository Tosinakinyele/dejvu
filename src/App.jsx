import './App.css'
import {Route, Routes } from "react-router-dom"
import Homepage from './pages/Homepage'
import Course from './pages/Course'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './component/Navbar'
import Footer from './component/footer/Footer'


function App() {


  return (
    <>
      <div>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='Course' element={<Course />} />
            <Route path='About' element={<About />} />
            <Route path='Contact' element={<Contact />} />
          </Routes>

        <Footer/>

      </div>

    </>
  )
}

export default App
