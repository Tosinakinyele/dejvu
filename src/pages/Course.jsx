import React from 'react'

const Course = () => {
  return (
    <div className="Course-sec">

        <h1>Courses We Offer</h1>
        <p>Physical & Online Classes</p>

        <div className="rowwww">
          <div className="Course-col">
            <h3>Frontend Engineering</h3>
            <p>This Course has to do with the development of software for computers, web applications and mobile applications. It's more centeral on building the design that users interact with on a web page.</p>
          </div>

          <div className="Course-col">
            <h3>Data Analytics</h3>
            <p>This Course has to do with with the generating daily data within an organization, ranging from transactional data stored in convertional database, telemetry data from utilized services and including that of social media. </p>
          </div>

          <div className="Course-col">
            <h3>UI/UX</h3>
            <p>This Course is clearly designed to give you clear understanding of what User Interface(UI) and User Experience(UX) design entails. Upon the completion, you will gain the important skills to create visually appealing and user-friendly interfaces.</p>
          </div>
        </div>

        <div className="rowwww" id='rowwww'>
          <div className="Course-col">
            <h3>Backend Engineering</h3>
            <p>This Course has to do with the development of server-side logic, databases and the system that power functionality and data management of applications and websites. It's more central on the part the users don't see.</p>
          </div>

          <div className="Course-col">
            <h3>Digital Marketing</h3>
            <p>This Course is designed to provide you with knowledge, strategies and tools needed to excel in the world of digital marketing. Upon the completion of this Course, you will understand how the likes of SEO, PPC, SEM and Copywriting works.</p>
          </div>

          <div className="Course-col">
            <h3>Data Science</h3>
            <p>This Course is designed to make you great at grasping concepts related to business inteligence, sophisticated data mining, data visualization, predictive analytics and data science programming. These methodologies can be applied via actual data collected from diverse origins.</p>
          </div>

        </div>
      </div>
  )
}

export default Course
