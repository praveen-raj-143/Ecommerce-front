import React, { useEffect, useState } from 'react'

const Laptops = () => {
  const [detail,setDetail]=useState([])
  useEffect(()=>{
    fetch("https://ecommerce-backend-hgbf.onrender.com/accessories")
    .then(res=>res.json())
    .then(data=>setDetail(data))
  })
  return (
    <div className='parent'>
      {detail.filter((item)=> item.catagory=== "laptop").map((items, index)=>{
        return(
          <div className='item' key={index}>
            <img className='itemimg' src={items.image} alt='not found'/>
            <h3>{items.name}</h3>
            <p>Rating :</p><img className='itemrate' src={items.ratting} alt='not found'/>
            <p>Offer Price : {items.price}</p>
            <p>Original Price : {items.oPrice}</p>
            <button>Add to cart</button>
          </div>
        )
      })}
    </div>
  )
}

export default Laptops