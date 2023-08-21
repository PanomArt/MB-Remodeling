import Head from 'next/head'
import React from 'react'
import Contact from '@/components/UI/Contact/Contact'
import Map from '@/components/Map';

export default function ContactPage() {
  return (
    <div className='contact contactpage'>
        <Head>
            <title>Contact | M&B Remodeling </title>
            <meta name="description" content="M&B Remodeling" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='contact contactpage'>
            <Contact/>
        </div>
        <Map/> 
    </div>
  )
}
