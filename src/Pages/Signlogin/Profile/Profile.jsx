import React, { useState,useEffect } from 'react'
import './Profile.css'
const Userdetails = () => {
    const [userdata,setUserdata]=useState("")
    useEffect(()=>{
        fetch("https://ecommerce-backend-hgbf.onrender.com/profile",{
      method:"POST",
      body:JSON.stringify({token:window.localStorage.getItem("token")}),
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
      
    })
    .then(res=>res.json())
    // .then(data=> console.log(data))
    .then(data=>setUserdata(data.data))
      })
      //  console.log(userdata)
    
      // const isLoggedIn = window.localStorage.getItem("loggedIn")
    
      const logout=()=>{
        window.location.href = "./"
        window.localStorage.clear()
        alert("logout successfull!" )
    }
  return (
    <div className='profilebox'>
      <h1 className='profilehead'>Profile </h1>
        <h3>Name : {userdata.username}</h3>
        {/* <h3>Age : {userdata.age}</h3> */}
        <h3>Email : {userdata.email}</h3>
        {/* <h3>Company : {userdata.companyname}</h3> */}
        {/* <h3>Employee ID : {userdata.employeeid}</h3> */}
        <button className='profilebtn' onClick={logout}>logout</button>
    </div>
  )
}

export default Userdetails