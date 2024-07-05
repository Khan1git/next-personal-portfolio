'use client'
import Link from 'next/link'
import { Github, Twitter, Facebook, Linkedin, Instagram } from 'lucide-react'
import './css/profile.css'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


function Profile() {

    useGSAP(()=>{

        //------------------ THE SIDE ICONS ANIMATION
        
        gsap.from('.Link1', {
            y: 100,
            opacity: 0,
            duration: 2
          })
        gsap.from('.Link2', {
            y: 100,
            opacity: 0,
            delay: 1,
            duration: 2
          })
        gsap.from('.Link3', {
            y: 100,
            opacity: 0,
            delay: 1.3,
            duration: 2
          })
        gsap.from('.Link4', {
            y: 100,
            opacity: 0,
            delay: 1.5,
            duration: 2
          })
        gsap.from('.Link5', {
            y: 100,
            opacity: 0,
            delay: 1.7,
            duration: 2
          })
          //------------------- THE SKILLS ANIMATION ---------------
        gsap.from('.skills1', {
            y: 100,
            opacity: 0,
            delay: 0.3,
            duration: 2
          })
        gsap.from('.skills2', {
            y: 100,
            opacity: 0,
            delay: 1,
            duration: 2
          })
        gsap.from('.skills3', {
            y: 100,
            opacity: 0,
            delay: 1.3,
            duration: 2
          })
        gsap.from('.skills4', {
            y: 100,
            opacity: 0,
            delay: 1.5,
            duration: 2
          })
        gsap.from('.skills5', {
            y: 100,
            opacity: 0,
            delay: 1.7,
            duration: 2
          })
        gsap.from('.skills6', {
            y: 100,
            opacity: 0,
            delay: 1.7,
            duration: 2
          })

        //   gsap.from('.Link1', {
        //     scrollTrigger: {
        //         trigger: '.Link1',
        //         markers: true, // Ensure correct property name
        //         pinSpacing: true, // Handle potential layout issues
        //         toggleActions: 'play pause resume reset',
        //         start: 'top 500px',
        //         // scrub: true,
        //     },
        //     y: 100,
        //     ease: 'easeIn',
        //     opacity: 0,
        //     delay: .3,
        //     duration: 3,
        // });

          //------------------ THE SIDE 2 TEXT ANIMATIONs

          gsap.from('.head2',{
            y:100,
            delay: 0,
            opacity: 0,
            duration: 2

          })
          gsap.from('.paragraph',{
            y:100,
            delay: 1,
            opacity: 0,
            duration: 2

          })

    })



    return (
        <div className='profile_home'>
            <div className="side1">
                <Link href={'/'} className='Link Link1 insta'><Instagram /></Link>
                <Link href={'/'} className='Link Link2 fb'><Facebook /></Link>
                <Link href={'/'} className='Link Link3 linkedin'><Linkedin /></Link>
                <Link href={'/'} className='Link Link4 twitter'><Twitter /></Link>
                <Link href={'/'} className='Link Link5 github'><Github /></Link>
            </div>
            {/* <div className="side3">
                <img src="/profile.png" alt="" />
            </div> */}
            <div className="side2">
              <p>Hi I Am Arif Rahman</p>
                <h2 className='head2'>WEB DEVELOPER</h2>
                <p className='paragraph'><b>Web Developer</b> almost 1 year of experience and worked in almost 15+ projects recently did projects in nextjs and tailwind css and also completed Bug Bounty full course currenlty doing projects in MERN STACK + NEXTJS and also focuing on Bug Hunting and Removing vulns from websites</p>
                <div className='hero_btns'>
                <button className='hire_btn'>Hire Me</button>
                <button className='project_btn'>Projects</button>
                {/* <button>Hire Me</button> */}
                </div>
                {/* <button>Contact</button> */}
                {/* <div className='grid'>
                    <div className="skills skills1">MongoDb</div>
                    <div className="skills skills2">Expressjs</div>
                    <div className="skills skills3">ReactJs</div>
                    <div className="skills skills4">Nodejs</div>
                    <div className="skills skills5">Javscript</div>
                    <div className="skills skills6">NextJs</div>
                    <div className="skills skills6">Bug Hunter</div>
                    <div className="skills skills6">Tailwind</div>
                    <div className="skills skills6">Html/Css</div>
                </div> */}
            </div>
        </div>
    )
}

export default Profile
