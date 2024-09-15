import React from 'react'
import './contact.css'

function contact() {
  return (
    <>
    <section className="contact_home">
        <div className="split">
            <div className="quote">
                <h2> Want To start a <span>New Project</span></h2>
                <p> Email: arrahman1k7@gmail.com</p>
                <p> Pno: +923476789439</p>
                <p> LinkedIn: Arif Rahman</p>
                
            </div>
            <div className="form">
                <div className='emails'>
                    {/* <p>Email:arifrahman1k7@gmail.com</p> */}
                    {/* <p>Pno: +00000000000</p> */}
                </div>
                <div className='input_div'>
                    <div className='top'>
                        <input type="text"placeholder='Name' />
                        <input type="text"placeholder='Email' />
                        {/* <input type="text" /> */}
                    </div>
                    <textarea type="text" rows={10} placeholder='msg' />
                    <a href="mailto:arifrahman1k7@gmail.com">contact</a>
                </div>
            </div>
        </div>
    </section>
      
    </>
  )
}

export default contact
