import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './Login.css'
const Signup = () => {
  const navigate=useNavigate()
  const [username, setUsername]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
  async function signUp(){
    let item= {username,email,password}

    await fetch("https://ecommerce-backend-hgbf.onrender.com/signup",{
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
        alert("signedUP successfully")
        // window.location.href = "./signin"
        navigate('/login')
      }else{
        alert("invalid credentails please try again")
      }
    })
  }
  return (
    <div className='b'>
      <h1 >Sign-in on Shop</h1>
      <div className='box'>
      <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Username*' required /><br /><br />
      <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email ID*' required /><br /><br />
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password*' required/> <br /><br />
      <button type='submit' onClick={signUp} className='sbtbtn' >SIGN UP</button>
      </div>
    </div>
  )
}

export default Signup