import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Ipads from '../Pages/Ipads'
import Mobiles from '../Pages/Mobiles'
import Laptops from '../Pages/Laptops'
import Accessories from '../Pages/Accessories'
import Home from '../Pages/Home/Home'
import Cart from '../Pages/Cart/Cart'
import Signup from '../Pages/Signlogin/Signup'
import Login from '../Pages/Signlogin/Login'
import Profile from '../Pages/Signlogin/Profile/Profile'
import Order from '../Pages/Order/Order'

const Routefile = () => {
  

  return (
    
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ipads' element={<Ipads/>} />
        <Route path='/mobiles' element={<Mobiles/>} />
        <Route path='/laptops' element={<Laptops/>} />
        <Route path='/accessories' element={<Accessories/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/order' element={<Order/>}/>
    </Routes>
    
  )
}


export default Routefile