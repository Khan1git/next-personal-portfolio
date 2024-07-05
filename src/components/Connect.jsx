import React from 'react'
import './css/contact.css'

function Connect() {
  return (
    <>
    <section className="contact_home">
        <div className="split">
            <div className="quote">
                <p> Want To start a New Project?</p>
            </div>
            <div className="form">
                <div className='emails'>
                    <p>Email: mypersona@gmail.com </p>
                    <p>Pno: +923465366778</p>
                </div>
                <div className='input_div'>
                    <input type="text" placeholder='Email Address' />
                    <a href="mailto:webmaster@example.com">contact</a>
                </div>

            </div>
        </div>
    </section>
      
    </>
  )
}

export default Connect
