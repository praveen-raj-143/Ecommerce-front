import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Cart.css'
const Userdetails = () => {
  const [increase,setIncrease]=useState(0)
    const [userdata,setUserdata]=useState([])
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
    .then(data=>setUserdata(data.data.cart))
    // console.log(userdata)
      }, [])
      const deleteproduct=(productId)=>{
        const deleteitem= productId
        const userId=localStorage.getItem("userId")
        console.log({productId: deleteitem,userId})
        const data={productId: deleteitem,userId}
        // console.log(deleteitem)
        axios.post("https://ecommerce-backend-hgbf.onrender.com/delete",data)
        .then(data=>{ 
          if(data.data.status==="ok"){
            alert("item deleted")
            
          }
          else if(data.data.status==="error"){
            alert("failed to delete") 
          }
        })
      }
      
    
    
  return (
    <div>
       <h1>Items in Cart</h1>
       {userdata.map((item,index)=>{
        return(
          <div className='cartcomp' key={index}>
            <div>
              <img className='cartimg' src={item.image} alt="not found" />
              <p><b>{item.name}</b></p>
            </div>
            <div className='cartprice'><p><b>{item.price}</b></p></div>
            <div className='cartbtncomp'>
          <button onClick={()=>setIncrease(increase+1)} className='cartbtn'>+</button>
          <p><b>{increase}</b></p>
          <button onClick={()=>setIncrease(increase-1)} className='cartbtn'>-</button>
        </div>
        <div>
          <button onClick={()=>deleteproduct(item._id)}>Delete</button>
        </div>
          </div>
          
        )
          
        
       })}
       <div className='carttotl'>
        <h2>Total:₹1,75,500</h2>
        <Link to='/order'><button>place order</button></Link>
      </div>
    </div>
  )
}

export default Userdetails