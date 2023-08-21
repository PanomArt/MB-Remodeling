import { client } from '@/components/data'
import React from 'react'

export default function Client() {
  return (
    <section id='client'>
           {client.map((item)=>(
              <div className='content'>
                     <img src={item.logo}/>
              </div>
           ))}
    </section>
  )
}
