import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const Mobiles = () => {
  const navigate = useNavigate()
  const detailedpost=(id, items)=>{
    // console.log(id, item)
    navigate(`/article/${id}`,{state:{data:items}})
  }
  // const [cart,setCart]=useState([])
  const [detail,setDetail]=useState([])
  useEffect(()=>{
    fetch("https://ecommerce-backend-hgbf.onrender.com/accessories")
    .then(res=>res.json())
    .then(data=>setDetail(data))
  },[])
  const isLoggedIn = window.localStorage.getItem("loggedIn")
  const addToCart = (productId) => {
    const product = productId
    const userId=localStorage.getItem("userId")
    console.log({productId: product,userId})
    const data={productId: product,userId}
    axios.post("https://ecommerce-backend-hgbf.onrender.com/cart",data)
    // .then(data=>console.log(data.data.status))
    .then(data=>{ 
      if(data.data.status==="ok"){
        alert("item added to cart")
        navigate('/cart')
      }
      else if(data.data.status==="error"){
        alert("failed to add") 
      }
    })
  };
  return (
    <div className='parent'>
      {detail.filter((item)=> item.catagory=== "Mobile").map((items, index)=>{
        return(
          <div className='item' key={index} >
            <img className='itemimg' onClick={()=>detailedpost(items.id, items)} src={items.image} alt='not found'/>
            <h3>{items.name}</h3>
            <p>Rating :</p><img className='itemrate' src={items.ratting} alt='not found'/>
            <p>Offer Price : {items.price}</p>
            <p>Original Price : {items.oPrice}</p>
            {isLoggedIn ? <button onClick={()=>addToCart(items._id)}>Add to cart</button>: ""}
          </div>
        )
      })}
    </div>
  )
}

export default Mobiles