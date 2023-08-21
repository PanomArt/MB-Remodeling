import { service } from '@/components/data'
import React from 'react'
import Link from 'next/link'

export default function Service() {
  return (
    <section id='service'>
        <div className='section-title'>
            <h2 className='content-title'>Our Services</h2>
            <p className='about-description'>
                Let us help you make your dreams a reality.
            </p>
        </div>
        <div className='service-container'>
             {
                service.map((item)=>(
                    <Link href='[title]' as={`/${item.title}`} className='content'>
                           <div className='image'>
                                <img src={item.img}/>
                           </div>
                           <h4 className='title'>{item.title}</h4>
                           <p className='description'>
                                Describe your image here. Use catchy text
                                to tell people the story behind the photo.
                                Go to “Manage Media” to add your content.
                           </p> 
                    </Link>
                ))
             }
        </div>
    </section>
  )
}
