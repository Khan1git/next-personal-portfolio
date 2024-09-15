'use client';

import './styles.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const FindBug = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [won, setWon] = useState(false);
  const router = useRouter(); // Next.js router for navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const emailDisplay = document.querySelector('.email_input');
    if (emailDisplay) {
      emailDisplay.innerHTML = email;

      // Check for HTML injection (<h1> tag in this case)
      const hasHtmlTagh1 = email.includes('<h1>');

      if (hasHtmlTagh1) {
        // Trigger win state if <h1> is found
        alert('Congratulations! You found the flag!');
        setWon(true); // Set the win state to true
      }
    }
  };

  // Handle returning to the home page
  const returnToHome = () => {
    router.push('/'); // Redirect to home page
  };

  return (
    <>
      {won ? (
        <div className="flag-message">
          <h4>Flag Captured: You Won!</h4>
          <h4>Your flag is: You_Are_G0oD_aT_BAsIcS</h4>
          <button onClick={returnToHome}>Return to Home</button>
        </div>
      ) : (
        <div className='task_home'>
          <div className='info_side'>
            <h3>Personal Blog</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam veritatis harum assumenda, sint sapiente quo a possimus, neque quaerat dolorem asperiores beatae?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam veritatis harum assumenda, sint sapiente quo a possimus, neque quaerat dolorem asperiores beatae?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam veritatis harum assumenda, sint sapiente quo a possimus, neque quaerat dolorem asperiores beatae?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam veritatis harum assumenda, sint sapiente quo a possimus, neque quaerat dolorem asperiores beatae?</p>
          </div>

          <div className='form_side'>
            <form onSubmit={handleSubmit} className='form'>
              <h2>Register With Us</h2>
              <div className='input-email'>
                <label htmlFor="email">Message</label>
                <input
                  id="email"
                  type="text"
                  placeholder='Enter Your message'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button type="submit">Submit</button>

              {submitted && (
                <div className="result">
                  <h2>Message sent successfully:</h2>
                  <p className='email_input'>{email}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FindBug;
