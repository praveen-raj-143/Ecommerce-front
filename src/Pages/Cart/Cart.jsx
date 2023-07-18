import React, { useState } from 'react'
import './Cart.css'
const Cart = () => {
  const [increase,setIncrease]=useState(0)
  // const [detail,setDetail]=useState([])
  // const [decrease,setDeccrease]=useState(0)
    // const [cart,setCart]=useState([])

    // const addToCart = () => {
    //   const newItem = {  };
    //   setCart([...cart, newItem]);
    // };
    // useEffect(()=>{
    //   fetch("https://ecommerce-backend-hgbf.onrender.com/cart")
    //   .then(res=>res.json())
    //   .then(data=>setDetail(data))
    //   .then(data=>console.log(data))
    // })
    // useEffect(()=>{
    //     fetch("http://localhost:5245/cart")
    //     .then(res=>res.json())
    //     .then(data=>setCart(data))
    //   })
  return (
    <div>
      <h1>Items in Cart</h1>
      <div className='cartcomp'>
        <div>
        <img className='cartimg' src="https://img.poorvika.com/cdn-cgi/image/width=450,height=450,quality=75/1600_JPG/Tabs/Apple/Apple-IPad-Pro-With-Apple-M1-Chip-11-Inch-WiFi-3rd-Generation/Apple-iPad-Pro-With-Apple-M1-Chip-11-Inch-WiFi-128GB-Space-Grey-MHQR3HN-A-3rd-Generation1.jpg" alt="not found" />
        <p><b>Ipad Pro M1</b></p>
        </div>
        <div className='cartprice'><p><b>Offer Price : ₹1,75,500</b></p></div>
        <div className='cartbtncomp'>
          <button onClick={()=>setIncrease(increase+1)} className='cartbtn'>+</button>
          <p><b>{increase}</b></p>
          <button onClick={()=>setIncrease(increase-1)} className='cartbtn'>-</button>
        </div>
      </div>
      
      <div className='carttotl'>
        <h2>Total:₹1,75,500</h2>
        <button>place order</button>
      </div>
    </div>
  )
}

export default Cart