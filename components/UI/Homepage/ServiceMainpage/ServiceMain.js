import { serviceMain } from '@/components/data'
import React from 'react'
import Link from 'next/link'

export default function ServiceMain() {
  return (
    <section id='service-main'>
           <h2 className='content-title'>Our Service Include</h2>

           <div className='servicemain-container'>
                 {serviceMain.map((item=>(
                         <Link href='[title]' as={`/${item.title}`} className='contents'>
                             <img src={item.img}/>
                             <h3 className='service-title'>{item.title}</h3>
                         </Link>
                 )))}
        
           </div>
           <div className='mainservice-button'>
                  <Link href='/services'>See All Services</Link>
           </div>
    </section> 
  )
}
