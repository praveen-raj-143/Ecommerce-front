import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div className='shop'>
        <h1 >SHOP</h1>
        <div className='header'>
        <h3 className='luffy'><NavLink to='/signup' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>SignUp</NavLink></h3>
        <h3 className='luffy'><NavLink to='/login' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>Login</NavLink></h3>
        <h3 className='luffy'><NavLink to='/cart' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>Cart</NavLink></h3>
        </div>
        
    </div>
  )
}

export default Header