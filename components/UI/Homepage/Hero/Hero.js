import React from 'react'

export default function Hero() {
  return (
    <section id='hero-section'>

           {/*Main Hero*/}
           <div className='main-container' >
                 <div className='main-container-content'>
                        <h1 className='mainhero-title'>Exceptional Home Remodeling & Renovation</h1>
                        <button className='mainhero-button'>Get A Free Estimate</button>
                 </div>
           </div>

           {/*Secondary Hero*/}
           <div className='secondary-container'>  
                <div className='secondary-image'/>
                <div className='secondary-content'>
                       <h2 className='content-title'>The Leading Bay Area
                        Remodeling Company</h2>
                       <p>
                        I'm a paragraph. Click here to add your own text 
                        and edit me. It’s easy. Just click “Edit Text” or 
                        double click me to add your own content and make 
                        changes to the font.
                        </p>

                        <button className='secondary-btn'>More About Us</button>
                </div>
           </div>
    </section>
  )
}
