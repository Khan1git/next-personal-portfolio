'use client'
import './css/skills.css'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

function Skill() {

    useGSAP(() => {

        gsap.from('.heading', {
            scrollTrigger: {
                trigger: '.heading',
                // markers: true, // Ensure correct property name
                pinSpacing: true, // Handle potential layout issues
                toggleActions: 'play pause resume reset',
                start: 'top 600px',
                scrub: true
            },
            x: -100,
            ease: 'easeIn',
            opacity: 0,
            delay: .3,
            duration: 2,
        });

        gsap.from('.skill1 ', {
            scrollTrigger: {
                trigger: '.skill1 ',
                // markers: true, // Ensure correct property name
                pinSpacing: true, // Handle potential layout issues
                toggleActions: 'play pause resume reset',
                start: 'top 600px',
            },
            y: 100,
            ease: 'easeIn',
            opacity: 0,
            delay: .1,
            duration: 2,
        });
        gsap.from('.skill2 ', {
            scrollTrigger: {
                trigger: '.skill2 ',
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
        gsap.from('.skill3 ', {
            scrollTrigger: {
                trigger: '.skill3 ',
                // markers: true, // Ensure correct property name
                pinSpacing: true, // Handle potential layout issues
                toggleActions: 'play pause resume reset',
                start: 'top 600px',
            },
            y: 100,
            ease: 'easeIn',
            opacity: 0,
            delay: .5,
            duration: 2,
        });
        gsap.from('.skill4 ', {
            scrollTrigger: {
                trigger: '.skill4 ',
                // markers: true, // Ensure correct property name
                pinSpacing: true, // Handle potential layout issues
                toggleActions: 'play pause resume reset',
                start: 'top 600px',
            },
            y: 100,
            ease: 'easeIn',
            opacity: 0,
            delay: .7,
            duration: 2,
        });
        gsap.from('.skill5 ', {
            scrollTrigger: {
                trigger: '.skill5',
                // markers: true, // Ensure correct property name
                pinSpacing: true, // Handle potential layout issues
                toggleActions: 'play pause resume reset',
                start: 'top 600px',
            },
            y: 100,
            ease: 'easeIn',
            opacity: 0,
            delay: .9,
            duration: 2,
        });
        gsap.from('.skill6 ', {
            scrollTrigger: {
                trigger: '.skill6 ',
                // markers: true, // Ensure correct property name
                pinSpacing: true, // Handle potential layout issues
                toggleActions: 'play pause resume reset',
                start: 'top 600px',
            },
            y: 100,
            ease: 'easeIn',
            opacity: 0,
            delay: 1,
            duration: 2,
        });

    }, [])
    return (
        <>
            <section className='skill_home'>
                <div className="two_parts">
                    <div className="heading">
                        <h2>SKILLS</h2>
                        <p>MERN STACK AND OTHERS</p>
                    </div>
                    <div className="skill_part">
                        <div className='grid main'>
                            {/* <h2>Fontend And Backend</h2> */}
                            <div className="skill skill1">
                                <img src="/mongodb.png" alt="mongodb" />
                                <p>MongoDb</p>
                            </div>
                            <div className="skill skill2">
                                <img src="/expressjs.png" alt="mongodb" height={50} />
                                <p>Expressjs</p>
                            </div>
                            <div className="skill skill3">
                                <img src="/react.png" alt="mongodb" height={50} />
                                <p>Reactjs</p>
                            </div>
                            <div className="skill skill4">
                                <img src="/node.png" alt="mongodb" />
                                <p>Nodejs</p>
                            </div>
                            <div className="skill skill5 java">
                                <img src="/javascript.png" alt="mongodb" height={50} />
                                <p>Javascript</p>
                            </div>
                            <div className="skill skill6">
                                <img src="/nextjs.png" alt="mongodb" />
                                <p>Nextjs 14</p>
                            </div>
                            <div className="skill skill6">
                                <img src="/bug.jpeg" alt="mongodb" height={50} />
                                <p>BUG HUNTER</p>
                            </div>
                            <div className="skill skill6">
                                <img src="/tailwind.png" alt="mongodb" height={50} />
                                <p>Tailwind CSS</p>
                            </div>
                            <div className="skill skill6">
                                <img src="/htmlcss.png" alt="mongodb" height={70} />
                                <p>HTML & CSS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skill
