import React from 'react'
import './project.css'
import Image from 'next/image'

const Project = () => {
    return (
        <section className='projects_section'>

            <h2>My <span>PROJECTS</span></h2>
            <p>My All project from beginner to advance</p>

            <div className="projects_container">
                
                <div class="project_card">
                    <div className='img'>
                        <Image src="/project/project1.png" alt="Project Image" className='img' width={400} height={400} />
                    </div>
                    <div class="project_info">
                        <h3>MERN STACK BILLING APPLICATION </h3>
                        <p>Generate PDF invoices for orders effortlessly</p>
                        <p>Integrated barcode scanner for streamlined product management</p>
                        <p>Maintain and update company details efficiently</p>
                        <a href="project_link" class="project_link">View Project</a>
                    </div>
                </div>

                <div class="project_card">
                    <div className='img'>
                        <Image src="/project/attendance system.png" alt="Project Image" className='img' width={400} height={400} />
                    </div>
                    <div class="project_info">
                        <h3>Attendance System </h3>
                        <p>users can log in and mark attendance as Present Leave or Absent</p>
                        <p>Users can submit leave requests with reasons for admin approval or rejection</p>
                        <p>Admins can manage students and attendance records with full CRUD functionality</p>
                        <p>Generate detailed PDF reports for each students attendance history</p>
                        <a href="project_link" class="project_link">View Project</a>
                    </div>
                </div>
            
                <div class="project_card">
                    <div className='img'>
                        <Image src="/project/project3.png" alt="Project Image" className='img' width={400} height={400} />
                    </div>
                    <div class="project_info">
                        <h3>Courses Website Ui </h3>
                        <p>A course website with smooth on-scroll animations using Animate js for an engaging experience</p>
                        <p>Users can log in to browse purchase and access courses effortlessly</p>
                        <p>Secure user authentication and seamless course purchasing functionality</p>
                        <a href="project_link" class="project_link">View Project</a>
                    </div>
                </div>

                <div class="project_card">
                    <div className='img'>
                        <Image src="/project/project2.png" alt="Project Image" className='img' width={400} height={400} />
                    </div>
                    <div class="project_info">
                        <h3>Nextjs Animated Website GSAP </h3>
                        <p>A billing system showcase website built with Next js featuring smooth animations powered by GSAP</p>
                        <p>Provides a modern and visually appealing presentation of the billing system</p>
                        <p>Highlights the systems features and functionality in an engaging and interactive design</p>
                        <a href="project_link" class="project_link">View Project</a>
                    </div>
                </div>

                <div class="project_card">
                    <div className='img'>
                        <Image src="/project/project4.png" alt="Project Image" className='img' width={400} height={400} />
                    </div>
                    <div class="project_info">
                        <h3>Social Media App Fb </h3>
                        <p>A social media application similar to Facebook where users can log in manage their profiles and create read update and delete posts</p>
                        <p>Features a user friendly interface for seamless interaction with posts and profiles</p>
                        <p>Secure login and profile management with full CRUD functionality for posts</p>
                        <a href="project_link" class="project_link">View Project</a>
                    </div>
                </div>

                <div class="project_card">
                    <div className='img'>
                        <Image src="/project/project5.png" alt="Project Image" className='img' width={400} height={400} />
                    </div>
                    <div class="project_info">
                        <h3>Tissue Sale website task</h3>
                        <p>A tissueselling website designed for comfort and ease of use</p>
                        <p>Simple clean layout showcasing tissue products with easy navigation</p>
                        <p>Features product descriptions pricing and a seamless shopping experience</p>
                        <a href="project_link" class="project_link">View Project</a>
                    </div>
                </div>

                <div class="project_card">
                    <div className='img'>
                        <Image src="/project/project6.png" alt="Project Image" className='img' width={400} height={400} />
                    </div>
                    <div class="project_info">
                        <h3>School Website Design </h3>
                        <p>A basic school website design displaying essential school details and available courses</p>
                        <p>Clean user friendly layout for easy navigation and information access</p>
                        <p>Features sections for school information courses and relevant details</p>
                        <a href="project_link" class="project_link">View Project</a>
                    </div>
                </div>

                <div class="project_card">
                    <div className='img'>
                        <Image src="/project/project7.png" alt="Project Image" className='img' width={400} height={400} />
                    </div>
                    <div class="project_info">
                        <h3>Portfolio webiste</h3>
                        <p>A personal portfolio website showcasing skills projects and achievements</p>
                        <p>Clean modern design with sections for professional experience portfolio items and contact</p>
                        <p>Responsive layout ensuring accessibility on all devices</p>
                        <a href="project_link" class="project_link">View Project</a>
                    </div>
                </div>



            </div>
        </section>
    )
}

export default Project
