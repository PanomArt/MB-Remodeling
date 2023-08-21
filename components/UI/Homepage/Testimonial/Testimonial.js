import { testimonial } from '@/components/data'
import React from 'react'
import {RiDoubleQuotesR } from "react-icons/ri";

export default function Testimonial() {
  return (
    <section id='testimonial'>
        <h2 className='content-title'>Satisfied Customers</h2>

        <div className='testimonial-container'>
                {testimonial.map((item)=>(
                    <div className='testimonial-content'>
                          <RiDoubleQuotesR size={50} className='quotes'/>
                          <p className='comment'>{item.message}</p>
                          <h3 className='name'>{item.name}</h3>
                    </div>
                ))}
        </div>
    </section>
  )
}
