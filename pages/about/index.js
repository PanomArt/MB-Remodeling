import React from 'react'
import Head from 'next/head'
import AboutHero from '@/components/UI/Aboutpage/AboutHero/AboutHero'
import Process from '@/components/UI/Aboutpage/Process/Process'
import Estimate from '@/components/UI/Estimate/Estimate'

export default function AboutPage() {
  return (
    <div className='aboutpage-maindiv'>
        <Head>
            <title>About | M&B Remodeling </title>
            <meta name="description" content="M&B Remodeling" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <AboutHero/>
        <Process/>
        <Estimate/>
    </div>
  )
}
