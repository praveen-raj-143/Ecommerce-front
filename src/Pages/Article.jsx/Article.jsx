import React from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import './Article.css'
import {useNavigate} from 'react-router-dom'
const Article = () => {
  const locate= useLocation()
  console.log(locate)
  const navigate = useNavigate()
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
    <div className='artpost'>
      <h1 className='arttitle'>{locate.state.data.name}</h1>
      <div className='flexcomp'>
      <img src={locate.state.data.image} alt="not found" className='artimage' />
      <div className='flexcompitem'>
      {isLoggedIn ? <button onClick={()=>addToCart(locate.state.data._id)}>Add to cart</button>: ""}
      <div className='ratting'>
      <p><b>Rating :</b></p><img className='rateimage' src={locate.state.data.ratting} alt='not found'/>
      </div>
      <p><b>Offer Price :{locate.state.data.price}</b></p>
      <p><b>Original Price : {locate.state.data.oPrice}</b></p>
      </div>
      </div>
      <p className='artdis'> <b>Discription : </b> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam quos debitis nesciunt ut possimus aut neque. Voluptas maxime sequi, pariatur at sint voluptates quia ex nisi alias qui, iusto saepe!</p>
    </div>
  )
}

export default Article