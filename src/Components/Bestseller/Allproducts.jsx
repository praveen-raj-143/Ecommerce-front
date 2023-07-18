import React, { useEffect, useState } from 'react'

const Allproducts = () => {
  const [detail,setDetail]=useState([])
  const [limit,setLimit]=useState(8)
  useEffect(()=>{
    fetch(`https://ecommerce-backend-hgbf.onrender.com/accessories?limit=${limit}`)
    .then(res=>res.json())
    .then(data=>setDetail(data))
  },[limit])

  const handleLoadMore = () =>{
    setLimit(limit+6);
  }
  return (
    <div className='parent'>
      {detail.map((items, index)=>{
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
      <div className='LoadMoreBtnContainer'>
          <button className='LoadMoreBtn' onClick={handleLoadMore}>Load More</button>
          <hr className='LoadMoreBtnHr'/>
        </div>
    </div>
  )
}

export default Allproducts