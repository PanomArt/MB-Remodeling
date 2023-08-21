import React from 'react'
import Head from 'next/head'
import Service from '@/components/UI/Servicepage/Service'
import Estimate from '@/components/UI/Estimate/Estimate'


export default function ServicePage() {
  return (
    <div className='service-mainpage'>
        <Head>
            <title>Services | M&B Remodeling </title>
            <meta name="description" content="M&B Remodeling" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Service/>
        <Estimate/>
    </div>
  )
}
