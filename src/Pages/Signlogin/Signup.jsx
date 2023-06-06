import React from 'react'
import './Login.css'
const Signup = () => {
  return (
    <div className='b'>
      <h1 >Sign-in on Shop</h1>
      <div className='box'>
      <input type="text" placeholder='Email*' /><br /><br />
      <input type="password" placeholder='password*' /> <br /><br />
      <button>SIGN IN</button>
      </div>
    </div>
  )
}

export default Signup