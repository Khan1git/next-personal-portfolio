'use client'
import Link from 'next/link'
import { Github, Twitter, Facebook, Linkedin, Instagram, Minus } from 'lucide-react'
import './css/profile.css'
import { useEffect } from 'react'

import Typewriter from 'typewriter-effect'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

function Profile() {


  useGSAP(() => {
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

    gsap.from('.head2', {
      y: 100,
      delay: 0,
      opacity: 0,
      duration: 2

    })
    gsap.from('.paragraph', {
      y: 100,
      delay: 1,
      opacity: 0,
      duration: 2

    })

    gsap.from('.F_name', {
      x: -100,
      delay: 1,
      opacity: 0,
      duration: 1
    })
    gsap.from('.Last_name', {
      x: -100,
      delay: 1.4,
      opacity: 0,
      duration: 2
    })

    gsap.from('.span-1', {
      x: -100,
      delay: .4,
      opacity: 0,
      duration: 2
    })
    gsap.from('.span-2', {
      x: -100,
      delay: 1,
      opacity: 0,
      duration: 2
    })
    gsap.from('.span-3', {
      x: -100,
      delay: 1.4,
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
      {/*-------------------------------- the second side */}

      <div className="side2">
        <p className='bug'>Hunt the bug</p>
        <h1><span>Arif</span> Rahman</h1>
        <div className="typewriter-container">
          <span className='typewriter-head'>
            I am a
          </span>
          <div>
            <Typewriter
              options={{
                strings: [' Web Developer', 'Freelancer', 'Bug Hunter'],
                autoStart: true,
                loop: true,
                wrapperClassName: 'typewriter-text'
              }}
            />
          </div>
        </div>
      </div>

      {/* =--------------------------------the second side */}

      {/* <div className='side3'>
        <a className="findbug" >
          <div className="icons">
            <Image src="/badge1.png" alt="not-showing" className='img' width={100} height={60} />
          </div>
        </a>
        <div className="icons">
          <Image src="/badge2.png" alt="not-showing" className='img' width={100} height={60} />
        </div>
        <div className="icons">
          <Image src="/badge3.png" alt="not-showing" className='img' width={100} height={60} />
        </div>
        <div className="icons">
          <Image src="/badge5.png" alt="not-showing" className='img' width={100} height={60} />
        </div>
      </div> */}
    </div>
  )
}

export default Profile
