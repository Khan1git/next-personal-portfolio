'use client'

import { useState } from 'react';
import './css/work.css';

function Work() {
    const projects = [
        {
            imgSrc: "/project/project1.png",
            videoSrc: "/project/project1.mp4",
            title: "Billing Application For Shop ",
            description: "mern stack shop management website",
            link: "https//www.github.com/khan1git"
        },
        {
            imgSrc: "/project/project3.png",
            videoSrc: "/project/project3.mp4",
            title: "Mern Stack Course Website",
            description: "Courses website using mern stack",
            link: "#"
        },
        {
            imgSrc: "/project/project2.png",
            videoSrc: "/project/project2.mp4",
            title: "Animated Webiste Using Gsap",
            description: "Animted website using gsap and nextjs for the Billing Application",
            link: "#"
        },
        {
            imgSrc: "/project/project4.png",
            // videoSrc: "/project/project3.mp4",
            title: "Socail Media App like Insta|Fb",
            description: "Simple Website design for School",
            link: "#"
        }
    ];


    return (
        <>
            <section className="work_home">
                <h2>PROJECTS</h2>
                {/* <p className='head_p'>some projects from frontend and fullstack you can find all other on my github account hover on the project to see the project</p> */}
                <div className="parent">
                    <div className="course-box">
                        {projects.map((project, index) => (
                            <div key={index} className="courses">
                                <div className="upper">
                                    <h3>{project.title}</h3>
                                    <h3>Visit</h3>
                                </div>
                                <img src={project.imgSrc} alt={project.title} className="project-image" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="btn">
                    {/* <button>show all</button> */}
                </div>
            </section>
        </>
    );
}

export default Work;
