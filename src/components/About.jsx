'use client'
import './css/about.css'
import { ArrowUpRight } from 'lucide-react'


import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';


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


  }, [])
  return (
    <div className='about_home'>
      <div className="about_side1">
        <h2 className='about_h2'>ABOUT ME</h2>
      </div>
      <div className="about_side2">
        <div className="logo">
          <ArrowUpRight size={510} color="#fcfcfc" />
        </div>
        <div className="content">
          <div className='p-1'>
            <b>MERN STACK</b> IT student experienced in mern stack completed almost 10+ project in mernstack fluient in crud operations also worked with firebase and cloudinary and other ui component provider such as bootstrap etc.</div>
          <div className='p-2'>futher more full stack nextjs and tailwind css and also completed bug bounty course currently expanding my knowladge using tryhackme .</div>
        </div>
      </div>
    </div>
  )
}

export default About
