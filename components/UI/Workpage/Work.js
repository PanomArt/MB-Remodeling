import { service } from '@/components/data'
import React from 'react'
import Link from 'next/link'

export default function Work() {
  return (
    <section id='service'>
        <div className='section-title'>
            <h2 className='content-title'>Our Work</h2>
            <p className='about-description'>
            You’re invited to browse a selection of recently completed projects below.
            </p>
        </div>

        <div className='container'>
            {
                service.map((item)=>(
                    <Link href='[title]' as={`/${item.title}`} className='content'>
                          <div className='image'>
                                <img src={item.img}/>
                                <h4>{item.title}</h4>
                          </div>
                    </Link>
                ))
            }
        </div>
    </section>
  )
}
