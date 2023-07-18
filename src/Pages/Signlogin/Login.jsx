import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
const Signin = () => {
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  async function login(){
    let item= {email,password}

   await fetch("https://ecommerce-backend-hgbf.onrender.com/signin",{
      method:"POST",
      body:JSON.stringify(item),
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
    })
    .then(res=>res.json())
    .then(data=>{ 
      if(data.status==="ok"){
        alert("login successfully")
        console.log(data)
        window.localStorage.setItem("token", data.data)
        window.localStorage.setItem("loggedIn", true)
        window.location.href = "./" 
      }
      else if(data.status==="error"){
        alert("failed to login invalid credentails") 
      }
    })
  }
  return (
    <div className='b'>
      <div className='signbox'>
      <h1 >Login on Shop</h1>
      
      </div>
      <div className='box'>
      <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email*'  required /><br /><br />
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password*'  required/> <br /><br />
      <button type='submit' onClick={login} className='sbtbtn' >SIGN IN</button> <br /> <br />
      <div>
      <p><Link to='/forgotpassword' >Forgot Password</Link></p>
      <p className='forgot'>Don't have account? <Link to='/signup' >SIGNUP here</Link></p>
      </div>
      </div>  
    </div>
  )
}

export default Signin