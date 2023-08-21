import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/UI/Homepage/Hero/Hero'
import Intro from '@/components/UI/Homepage/Intro/Intro'
import ServiceMain from '@/components/UI/Homepage/ServiceMainpage/ServiceMain'
import Testimonial from '@/components/UI/Homepage/Testimonial/Testimonial'
import Contact from '@/components/UI/Contact/Contact'
import Client from '@/components/UI/Homepage/Client/Client'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='homepage'>
      <Head>
        <title>Home | M&B Remodeling </title>
        <meta name="description" content="M&B Remodeling" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero/>
      <Intro/>
      <ServiceMain/>
      <Testimonial/>
      <div className='contact homepage'>
            <Contact/>
      </div>
      <Client/>
    </div>
  )
}
