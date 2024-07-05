import React from 'react'
import './css/project.css'

function Project() {
  return (
    <>
      <section className="project_home">
        <div className="cover">
        <div className="title">
          <h2>OUR SERVICES</h2>
          <p>We can help you with the following services</p>
        </div>
        <div className="projects">
          <div className="project">
            <div className="number">0</div>
            <div className="text">Web Designs</div>
            <img src="/design1.png" alt="Project Image" className="image" />
          </div>
          <div className="project">
            <div className="number">1</div>
            <div className="text">Backend</div>
            <img src="/backend.avif" alt="Project Image" className="image" />
          </div>
          {/* <div className="project">
            <div className="number">2</div>
            <div className="text">Website Animation</div>
            <img src="/profile2.jpg" alt="Project Image" className="image" />
          </div> */}
          <div className="project">
            <div className="number">2</div>
            <div className="text">Bug Hunting</div>
            <img src="/bughunt.png" alt="Project Image" className="image" />
          </div>
          {/* <div className="project">
            <div className="number">4</div>
            <div className="text">GSAP ANIMATED WEBSITE</div>
            <img src="/profile2.jpg" alt="Project Image" className="image" />
          </div> */}
        </div>
        </div>
      </section>
    </>
  )
}

export default Project
