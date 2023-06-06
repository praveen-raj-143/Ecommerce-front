import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from './Header/Header'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
        <Header/>
        <ul className='Nav'>
        <li><NavLink to='/' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>HOME</NavLink></li>
        <li><NavLink to='/ipads' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>IPAD</NavLink></li>
        <li><NavLink to='/mobiles' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>MOBILE</NavLink></li>
        <li><NavLink to='/laptops' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>LAPTOP</NavLink></li>
        <li><NavLink to='/accessories' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>ACCESSORIES</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar