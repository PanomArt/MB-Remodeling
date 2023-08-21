import Footer from '@/components/Layout/Footer/Footer'
import Header from '@/components/Layout/Header/Header'
import '@/styles/globals.scss'

export default function App({ Component, pageProps }) {
  return (
    <div className='layout-mainapp'>
        <Header/>
          <Component {...pageProps} />
        <Footer/>  
    </div>
  )
}
