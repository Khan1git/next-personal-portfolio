'react'
import './css/about.css'
import { ArrowUpRight } from 'lucide-react'


function About() {
  return (
    <div className='about_home'>
      <div className="about_side1">
        <h2>ABOUT ME</h2>
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
