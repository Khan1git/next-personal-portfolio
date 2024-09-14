'use client'
import './about.css'
import { ArrowUpRight } from 'lucide-react'


import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

import { LaptopMinimal, Drama, Rss } from 'lucide-react'


gsap.registerPlugin(ScrollTrigger)

function About() {

  useGSAP(() => {

    gsap.from('.about_h2', {
      scrollTrigger: {
        trigger: '.about_h2',
        // markers: true, // Ensure correct property name
        pinSpacing: true, // Handle potential layout issues
        toggleActions: 'play pause resume reset',
        start: 'top 700px',
        // scrub: true
        // end: 'top center'
      },
      y: 100,
      ease: 'easeIn',
      opacity: 0,
      delay: .3,
      duration: 2,
    });

    gsap.from('.p-1', {
      scrollTrigger: {
        trigger: '.p-1',
        // markers: true, // Ensure correct property name
        pinSpacing: true, // Handle potential layout issues
        toggleActions: 'play pause resume reset',
        start: 'top 600px',
      },
      y: 100,
      ease: 'easeIn',
      opacity: 0,
      delay: .3,
      duration: 2,
    });

    gsap.from('.p-2', {
      scrollTrigger: {
        trigger: '.p-2',
        // markers: true, // Ensure correct property name
        pinSpacing: true, // Handle potential layout issues
        toggleActions: 'play pause resume reset',
        start: 'top 600px',
      },
      y: 100,
      ease: 'easeIn',
      opacity: 0,
      delay: .3,
      duration: 2,
    });

    gsap.from('.logo', {
      scrollTrigger: {
        trigger: '.logo',
        // markers: true, // Ensure correct property name
        pinSpacing: true, // Handle potential layout issues
        toggleActions: 'play pause resume reset',
        start: 'top 600px',
      },
      x: -100,
      ease: 'easeIn',
      opacity: 0,
      delay: .3,
      duration: 2,
    });

    gsap.from('.about1', {
      scrollTrigger: {
        trigger: '.about1',
        // markers: true, // Ensure correct property name
        pinSpacing: true, // Handle potential layout issues
        toggleActions: 'play pause resume reset',
        start: 'top 600px',
      },
      y: 100,
      ease: 'easeIn',
      opacity: 0,
      delay: .3,
      duration: 2,
    });


  }, [])

  return (
    <>
      <section className='about_home'>
        <h2>About <span>Me</span></h2>
        <div className="main">
          <div className="side_1">
            <h2>I am a <span>Web developer and a Bug Hunter</span> based in pakistan</h2>
            <p>web developer having 2 years of experience successfully completed 15+ projects stacks include | HTML CSS AND JAVASCRIPT | MERN STACK AND NEXTJS | PYTHON FLASK
              | Bug Bounty Experience include Owasp top 10 still learning and exploring THM AND HTB
            </p>
            <button>Download CV</button>
          </div>
          <div className="side_1_img">
            <img src="./profile3.jpeg" alt="" />
          </div>
        </div>
      </section>

      {/* -------------------- SERVICES SECTION ----------------- */}

      <section className='services_section'>
        <h2>My <span>Services</span> </h2>
        <div className="services_cards">
          <div className="card">
            <LaptopMinimal size={100} />
            <h4>Web developer</h4>
            <p>web developer having 2 years of experience successfully completed 15+ projects stacks include | HTML CSS AND JS | MERN STACK AND NEXTJS | PYTHON FLASK </p>
          </div>
          <div className="card">
            <Drama size={100} />
            <h4>Bug Hunter</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae qui ratione aspernatur?</p>
          </div>
          <div className="card">
            <Rss size={100} />
            <h4>Blogger</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae qui ratione aspernatur?</p>
          </div>
        </div>
      </section>


      {/* ------------------------------ SKILLS SECTION ------------------------ */}

      <section className='about_skil_section'>
        <h2>My <span>Skills</span></h2>
        <div class="skills_container">
          {/* <!-- First div with greater height --> */}
          <div class="skill-item large">
            <img src="/python.svg" alt="Python" />
            <p>Python</p>
          </div>
          {/* <!-- Normal divs --> */}
          <div class="skill-item">
            <img src="/javascript.png" alt="Skill" />
            <p>Javascript</p>
          </div>
          <div class="skill-item">
            <img src="/mongodb.png" alt="Skill" />
            <p>Mongodb</p>
          </div>
          <div class="skill-item">
            <img src="/react.png" alt="Skill" />
            <p>React</p>
          </div>
          <div class="skill-item">
            <img src="/node.png" alt="Skill" />
            <p>Nodejs</p>
          </div>
          <div class="skill-item">
            <img src="/expressjs.png" alt="Skill" />
            <p>Expressjs</p>
          </div>
          <div class="skill-item">
            <img src="/htmlcss.png" alt="Skill" />
            <p>Html and CSS</p>
          </div>
          <div class="skill-item">
            <img src="/nextjs.png" alt="Skill" />
            <p>Nextjs</p>
          </div>

          {/* <!-- Last div with greater height --> */}
          <div class="skill-item large">
          <img src="/bughunt.png" alt="Skill" />
          <p>Bug Bounty</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
