'use client'
import './css/education.css'

function Education() {
    return (
        <>
            <section id="education_home">
                <div className="education_details">
                    <div className="edu_details">
                        <h2>EDUCATION</h2>
                        <div className="edu_body">
                            <div className="edu1">
                                <h3 className='heading'>Swat Education College</h3>
                                <p className='info'>2019-2021</p>
                                <p className='info'>Pre Medical Biology</p>
                            </div>
                            <div className="edu1">
                                <h3 className='heading'>University of Malakand</h3>
                                <p className='info'>2021-2025</p>
                                <p className='info'>Bs Information Technology</p>
                            </div>
                        </div>
                    </div>
                    <div className="experience">
                        <div className="experience_details">
                            <h3>CERTIFICATIONS</h3>
                            <div className="exp_body">
                                <div className="exp1">
                                    <h2 className='heading'>Cyber Security</h2>
                                    <p className='info'>2022</p>
                                    <p className='info'>Introduction to Cyber Security Coursera</p>
                                </div>
                                <div className="exp1">
                                    <h2 className='titl'>Bug Hunting</h2>
                                    <p className='info'>2024</p>
                                    <p className='info'>Owasp Top 10</p>
                                </div>
                                <div className="exp1">
                                    <h2 className='titl'>JavaScript For Beginners</h2>
                                    <p className='info'>2023</p>
                                    <p className='info'>Simplelearn</p>
                                </div>
                                <div className="exp1">
                                    <h2 className='titl'>MERN STACK AND NEXTJS</h2>
                                    <p className='info'>2023</p>
                                    <p className='info'>Youtube</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Education    
