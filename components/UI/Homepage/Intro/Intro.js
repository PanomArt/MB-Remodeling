import { intro } from '@/components/data'
import React from 'react'

export default function Intro() {
  return (
    <section id='intro-section'>
           <h2 className='content-title'>Why Choose Us</h2>
           
           <div className='intro-container'>
                 {intro.map((item)=>(
                       <div className='intro-content'>
                              <h3 className='intro-title'>{item.title}</h3>
                              <p className='intro-des'>I'm a paragraph. Click here to add your own text.</p>
                       </div>
                 ))}
           </div>
    </section>
  )
}
