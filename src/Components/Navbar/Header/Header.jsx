import React from 'react'
import './Header.css'
import { NavLink,Link } from 'react-router-dom'
const Header = () => {
  const isLoggedIn = window.localStorage.getItem("loggedIn")
  return (
    <div className='shop'>
        <Link to="/" className='logo'><h1 >SHOP</h1></Link>
        <div className='header'>
        {/* <h3 className='luffy'><NavLink to='/signup' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>SignUp</NavLink></h3> */}
        {isLoggedIn ? "" : <h3 className='luffy'><NavLink to='/login' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>Login</NavLink></h3>}
        {isLoggedIn ? <h3 className='luffy'><NavLink to='/cart' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>Cart </NavLink></h3> : ""}
        {isLoggedIn ? <h3 className='luffy'><NavLink to='/profile' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>Profile </NavLink></h3> : ""}
        </div>
        
    </div>
  )
}

export default Header