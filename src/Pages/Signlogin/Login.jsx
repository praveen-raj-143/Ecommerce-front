import React from 'react'

const Login = () => {
  return (
    <div className='b'>
      <h1 >Login to Shop</h1>
      <div className='box'>
      <input type="text" placeholder='Email*' /><br /><br />
      <input type="password" placeholder='password*' /> <br /><br />
      <button>Login</button>
      </div>
    </div>
  )
}

export default Login