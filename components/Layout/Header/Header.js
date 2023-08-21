import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mobileActive,setMobileActive] = useState(false);
  
  useEffect(()=>{
       const handleScroll = () => {
            const currentScrollPosition = window.pageYOffset;
            const visible = prevScrollPosition > currentScrollPosition;
            setPrevScrollPosition(currentScrollPosition);
            setVisible(visible);
            setMobileActive(false);   
       };
       window.addEventListener('scroll', handleScroll);
       return () => window.removeEventListener('scroll', handleScroll);

  },[prevScrollPosition])
  return (
    <header style={{ top: visible ? 0 : '-10em' }}>
          <Link href='/' className='leftside'>
                <svg className='logo'>
                     <path d='M91.47 42.012L80.845 31.386 20.25 92.439v74.926h15.027V99.744l-.174-.085L91.47 42.012z'/>
                     <path d='M130.098 42.04l.028-.028L119.5 31.386 52.313 99.721l.022.023h-.022v67.621h99.159v-15.027l-.495-52.594h-.023l.023-.023-32.186-30.839-10.248 10.248 27.407 26.713v46.495H67.339V105.87l52.149-53.039 45.822 44.506-.175.085.088 69.943h15.027V92.439L130.098 42.04z'/>
                </svg>
                <h2 className='logo-text'>M&B Remodeling</h2>
          </Link>
          <div className='rightside'>
              <nav className={`navigator ${mobileActive ? 'active':''}`}
                   onClick={()=>setMobileActive(false)}
              >
                  <Link href='/'>Home</Link>
                  <Link href='/about'>About</Link>
                  <Link href='/services'>Services</Link>
                  <Link href='/work'>Work</Link>
                  <Link href='/contact'>Contact</Link>
              </nav>
              <p className='telephone-number'>123-456-7890</p>
          </div>
          <div className='mobile-menus' onClick={()=>setMobileActive(!mobileActive)}>
                {mobileActive ? <AiOutlineClose/>:<AiOutlineMenu/>}
          </div>
    </header>
  )
}
