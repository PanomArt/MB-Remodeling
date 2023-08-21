import React from 'react'
import Head from 'next/head'
import Work from '@/components/UI/Workpage/Work'
import Estimate from '@/components/UI/Estimate/Estimate'

export default function WorkPage() {
  return (
    <div className='work-mainpage'>
        <Head>
            <title>Work | M&B Remodeling </title>
            <meta name="description" content="M&B Remodeling" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Work/>
        <Estimate/>
    </div>
  )
}
