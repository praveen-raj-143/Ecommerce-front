import React, { useState,useEffect } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'
import './Cart.css'
import {useNavigate} from 'react-router-dom'
const Userdetails = () => {
  const navigate = useNavigate()
  // const [increase,setIncrease]=useState(1)
  const [price,setPrice]=useState(0)
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
        // console.log({productId: deleteitem,userId})
        const data={productId: deleteitem,userId}
        // console.log(deleteitem)
        axios.post("https://ecommerce-backend-hgbf.onrender.com/delete",data)
        .then(data=>{ 
          if(data.data.status==="ok"){
            alert("item deleted")
             navigate('/cart')             
          }
          else if(data.data.status==="error"){
            alert("failed to delete") 
          }
        })
      }
      const placeorder=(productId)=>{
        // setUserdata([])
        // navigate('/order')
        const deleteallitem= productId
        const userId=localStorage.getItem("userId")
        console.log({productId: deleteallitem,userId})
        const data={productId: deleteallitem,userId}
        console.log(userId)
        axios.post("https://ecommerce-backend-hgbf.onrender.com/update",data)
        
        .then(data=>{ 
          if(data.data.status==="ok"){
            alert("order placed")
            navigate('/order')
            // setUserdata([]);
          }
          else if(data.data.status==="error"){
            alert("failed to delete") 
          }
        })
      }
      // const handlePlaceOrder = async () => {
      //   try {
      //     // Replace 'YOUR_API_ENDPOINT' with your actual backend API endpoint to place an order
      //     await axios.post('http://localhost:5245/order');
      //     setUserdata([]); // Empty the cart on successful order placement
      //   } catch (error) {
      //     console.error('Error placing order:', error);
      //   }
      // };
      
    const handleprice=()=>{
      let ans=0;
      userdata.map((item)=>(ans +=item.price*item.quantity))
      setPrice(ans)
    }
    useEffect(()=>{
      handleprice()
      
    })

    

  // const [cart, setCart] = useState([
  //   { id: 1, name: 'Item 1', price: 10, quantity: 1 },
  //   { id: 2, name: 'Item 2', price: 15, quantity: 2 },
  //   // Add more items as needed
  // ]);
const handleQuantityChange = (itemId, newQuantity) => {
  // let quantity=1
    const updatedCart = userdata.map((item) =>
      item._id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setUserdata(updatedCart);
    console.log(updatedCart)
  };
    const increaseQuantity = (itemId) => {
    const itemToUpdate = userdata.find((item) => item._id === itemId);
    console.log(itemToUpdate)
    if (itemToUpdate) {
      const newQuantity = itemToUpdate.quantity + 1;
      handleQuantityChange(itemId, newQuantity);

    }
  };
    const decreaseQuantity = (itemId) => {
    const itemToUpdate = userdata.find((item) => item._id === itemId);
    console.log(itemToUpdate)
    if (itemToUpdate.quantity >= 2) {
      
      const newQuantity = itemToUpdate.quantity - 1;
      
      handleQuantityChange(itemId, newQuantity);

    }
  };
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
            <div className='cartprice'><p>Price : <b>{item.price}</b></p></div>
            <div className='cartbtncomp'>
              
          <button onClick={() => increaseQuantity(item._id)} className='cartbtn'>+</button>
          <span>Quantity: <b>{item.quantity}</b></span>
          <button onClick={() => decreaseQuantity(item._id)} className='cartbtn'>-</button>
          {/* <p><b>{increase}</b></p> */}
          {/* <button onClick={()=>setIncrease(increase-1)} className='cartbtn'>-</button> */}
          <div>
          <p>Sub total : <b>{item.price*item.quantity}</b></p>
        </div>
        </div>
        
        <div className='cartprice'>
          <button  onClick={()=>deleteproduct(item._id)}>Delete</button>
        </div>
        {/* <button onClick={()=>deleteallproduct(item._id)}>place order</button> */}
          </div>
          
        )
          
        
       })}
       <div className='carttotl'>
        <h2>Total:{price}</h2>
        <button onClick={()=>placeorder()}>place order</button>
      </div>
    </div>
  )
}

export default Userdetails
