'use client'

import { useState } from 'react';
import './css/work.css';

function Work() {
    const projects = [
        {
            imgSrc: "/project/project1.png",
            videoSrc: "/project/project1.mp4",
            title: "MERNSTACK BILLING APPLICATION",
            description: "mern stack shop management website",
            link: "https//www.github.com/khan1git"
        },
        {
            imgSrc: "/project/project2.png",
            videoSrc: "/project/project2.mp4",
            title: "GSAP ANIMATED WEBSITE",
            description: "Animted website using gsap and nextjs for the Billing Application",
            link: "#"
        },
        {
            imgSrc: "/project/project3.png",
            videoSrc: "/project/project3.mp4",
            title: "MERNSTACK COURSES WEBISTE",
            description: "Description for project 3",
            link: "#"
        }
    ];

    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [loading, setLoading] = useState(Array(projects.length).fill(false));

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
        setLoading((prevLoading) => {
            const newLoading = [...prevLoading];
            newLoading[index] = true;
            return newLoading;
        });
    };

    const handleVideoLoadedData = (index) => {
        setLoading((prevLoading) => {
            const newLoading = [...prevLoading];
            newLoading[index] = false;
            return newLoading;
        });
    };

    const LoadingStyle = {
        textAlign: "center",
    }

    return (
        <>
            <section className="work_home">
                <h2>PROJECTS</h2>
                <p className='head_p'>some projects from frontend and fullstack you can find all other on my github account hover on the project to see the project</p>
                <div className="parent">
                    <div className="course-box">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="courses"
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {hoveredIndex === index ? (
                                    <>
                                        {loading[index] && <div className="loading" style={LoadingStyle}>Loading...</div>}
                                        <video
                                            src={project.videoSrc}
                                            autoPlay
                                            loop
                                            muted
                                            className="project-video"
                                            onLoadedData={() => handleVideoLoadedData(index)}
                                        />
                                    </>
                                ) : (
                                    <img src={project.imgSrc} alt="" className="project-image" />
                                )}
                                <div className="details">
                                    <h4>{project.title}</h4>
                                    <p>{project.description}</p>
                                    <a href={project.link}>visit</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="btn">
                    <button>show all</button>
                </div>
            </section>
        </>
    );
}

export default Work;
