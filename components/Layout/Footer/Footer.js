import React from 'react'
import { BiLogoFacebook,BiLogoTwitter,BiLogoYoutube } from "react-icons/bi";

export default function Footer() {
  return (
    <footer>
            <div className='text'>
                <p className='footer-text'>© 2035 by M&B Remodeling. </p>
                <p className='footer-text'>Powered and secured by <span>Wix</span></p>
            </div>
          
            <div className='social-media'>
                  <span><BiLogoFacebook/></span>
                  <span><BiLogoTwitter/></span>
                  <span><BiLogoYoutube/></span>
            </div>
    </footer>
  )
}
