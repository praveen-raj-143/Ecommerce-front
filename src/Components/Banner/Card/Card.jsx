import React from 'react'
import "./Card.css"
const Card = ({image}) => {
  return (
    <div className='card-container'>
      <img src={image} alt="not found" />
    </div>
  )
}

export default Card