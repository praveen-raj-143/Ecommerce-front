import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footmain'>
        <div className='footercontainer'>
        <div className='footerbox'>
            <h3>Connect with us</h3>
            <div className='footimgs'>
            <p>what'sApp</p>
            <p>facebook</p>
            <p>instagram</p>
            <p>twitter</p>
            </div>
        </div>
        <div className='footerbox'>
            <h3>Company</h3>
            <div className='footlinks'>
            <p>About Us</p>
            <p>Career</p>
            <p>Terms and conditions</p>
            <p>Privacy Policy</p>
            
            </div>
        </div>
        </div>    
    <hr />
    <p className='footerfooot'>@ 2023 ONGRID - A brand of Handy Online Solutions Private Limited</p>
    </div>
  )
}

export default Footer