import React from 'react'
import './project.css'
import Image from 'next/image'

const Project = () => {
    return (
        <section className='projects_section'>

            <h2>My <span>Projects</span></h2>
            <p>My All project from beginner to advance</p>
            <div className="projects_container">
                <div class="project_card">
                    <Image src="/project/project1.png" alt="Project Image" className='img' width={500} height={400} />
                    <h3>MERN STACK BILLING APPLICATION </h3>
                    <div class="project_info">
                        <p>MERN STACK BILLING APPLICATION DESIGNED TO KEEP TRACK OF SALES IN A SHOP</p>
                    <a href="project_link" class="project_link">View Project</a>
                    </div>
                </div>

                <div class="project_card">
                    <Image src="/project/project4.png"  alt="Project Image" width={500} height={400} />
                    <h3>Socail Media Application</h3>
                    <div class="project_info">
                    <a href="project_link" class="project_link">View Project</a>
                        <p>Social Media Application like insta using mern stack to learn cloudinary and other advance apis methods.</p>
                    </div>
                </div>
                <div class="project_card">
                    <Image src="/project/attendance system.png"  alt="Project Image" width={500} height={400} />
                    <h3>Attendance System Mern stack</h3>
                    <div class="project_info">
                    <a href="project_link" class="project_link">View Project</a>
                        <p>Internship task attendance system using mern stack.</p>
                    </div>
                </div>
    
                <div class="project_card">
                    <Image src="/project/project2.png"  alt="Project Image" width={500} height={400} />
                    <h3>Website Animation Gsap</h3>
                    <div class="project_info">
                    <a href="project_link" class="project_link">View Project</a>
                        <p>Modren webiste designed to learn on scroll animation using gsap</p>
                    </div>
                </div>


                <div class="project_card">
                    <Image src="/project/project3.png"  alt="Project Image" width={500} height={400} />
                    <h3>Courses Webiste</h3>
                    <div class="project_info">
                    <a href="project_link" class="project_link">View Project</a>
                        <p>Modren coursess website using mern stack.</p>
                    </div>
                </div>

                <div class="project_card">
                    <Image src="/project/project7.png"  alt="Project Image" width={500} height={400} />
                    <h3>Portfolio website</h3>
                    <div class="project_info">
                    <a href="project_link" class="project_link">View Project</a>
                        <p>Blog website using mern stack</p>
                    </div>
                </div>
                
                <div class="project_card">
                    <Image src="/project/project5.png"  alt="Project Image" width={500} height={400} />
                    <h3>Tissue Website Design</h3>
                    <div class="project_info">
                    <a href="project_link" class="project_link">View Project</a>
                        <p>Client Tissue website design</p>
                    </div>
                </div>

                <div class="project_card">
                    <Image src="/project/project6.png"  alt="Project Image" width={500} height={400} />
                    <h3>Html and Css School webiste</h3>
                    <div class="project_info">
                    <a href="project_link" class="project_link">View Project</a>
                        <p>Responsive school webiste design</p>
                    </div>
                </div>
                <div class="project_card">
                    <Image src="/project/project.png"  alt="Project Image" width={500} height={400} />
                    <h3>Blog Website</h3>
                    <div class="project_info">
                    <a href="project_link" class="project_link">View Project</a>
                        <p>Blog website using mern stack</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Project
