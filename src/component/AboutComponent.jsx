import React from 'react'
import playground from "../assets/playground.jpg"
import library from "../assets/library.jpg"
import healthyfood from "../assets/healthyfood.jpg"
import london from "../assets/london.jpg"
import newyork from "../assets/new york.jpg"
import washingthon from "../assets/washingthon.jpg"


const AboutComponent = () => {
  return (
    <div>
        <h1 className='Facilities-Head'>Our Facilities</h1>
        <p className='fal-p'>We have one of the best facilities in the world.</p>

        <div className="roww">
          <div className="facilities-col">
            <img src={library} alt="Library" />
            <h3>World Class Library</h3>
            <p>We have a well-equipped and condulsive library<br />to designed to positevly help our Students in their<br />to day-to-day research. This also help to influence<br />to engagement and peer learning.</p>
          </div>

          <div className="facilities-col">
            <img src={playground} alt="playground" />
            <h3>Largest Play Ground</h3>
            <p>We have a large play ground to avail our Students vast<br />to opportunity to express their fun-loving nature while<br />to developing crucial cognitive, social, Physical and<br />to emotional skills.</p>
          </div>
          <div className="facilities-col">
            <img src={healthyfood} alt="Resturant" />
            <h3>Tasty and Healthy Food</h3>
            <p>The zeal to take the hygiene and diet of our Students<br />to seriously is the reason why we personally invested<br />to in our resturant. Our foods and enviroments<br />to are pleasant.</p>
          </div>

        </div>

        <h1 className='global-h1'>Our Global Campus</h1>
    <p className='global-p'>We have the best global campus in the world.</p>

    <div className="Row">
     <div className="Campus-col">
        <img src={london} alt="London Campus"/>
        <div className="layer">
          <h3>LONDON</h3>
        </div>
     </div>
     
     <div className="Campus-col">
        <img src={newyork} alt="New York Campus"/>
        <div className="layer">
          <h3>NEW YORK</h3>
        </div>
     </div>

     <div className="Campus-col">
        <img src={washingthon} alt="washingthon Campus"/>
        <div className="layer">
          <h3>WASHINGTHON</h3>
        </div>
     </div>
    </div>

      </div>
  )
}

export default AboutComponent
