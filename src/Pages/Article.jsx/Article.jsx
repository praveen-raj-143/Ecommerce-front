import React from 'react'
import { useLocation } from 'react-router-dom'
import './Article.css'
const Article = () => {
  const locate= useLocation()
  console.log(locate)
  return (
    <div className='artpost'>
      <h1 className='arttitle'>{locate.state.data.name}</h1>
      <img src={locate.state.data.image} alt="not found" className='artimage' />
      <p>Offer Price :{locate.state.data.price}</p>
      <p>Original Price : {locate.state.data.oPrice}</p>
      <p className='artdis'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam quos debitis nesciunt ut possimus aut neque. Voluptas maxime sequi, pariatur at sint voluptates quia ex nisi alias qui, iusto saepe!</p>
    </div>
  )
}

export default Article