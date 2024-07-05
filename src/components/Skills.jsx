import React from 'react'
import './css/skills.css'


function skill() {
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
                                <img src="/react.png" alt="mongodb"  height={50}/>
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

export default skill
