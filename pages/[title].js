import React from 'react'
import { useRouter } from 'next/router'
import { modelDetails } from '@/components/data'
import Head from 'next/head';
import Estimate from '@/components/UI/Estimate/Estimate';

export async function getServerSideProps() {
  const data = modelDetails;
  return {
      props: { data },
  };
}

export default function Inspect({data}) {
    const router = useRouter();
    const { title } = router.query;
    const model = data.find(item => item.title === title);
  
  return (
    <div className='inspects'>
           <Head>
                <title>{model ? `${model.title} | M&B Remodeling`:''}</title>
                <meta name="description" content="M&B Remodeling" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
          </Head>
        
          <div className='section-title'>
               <h2 className='content-title'>{model.title}</h2>
               <p className='description'>
                    I'm a paragraph. Click here to add your own text and edit me.
               </p>
          </div>
          <div className='inspect-container'>
                {
                    model.image.map((imagePath, index) =>(
                        <div className='inspect-content' key={index}>
                            <img src={imagePath} loading='lazy' alt={`Image ${index}`}/>
                        </div>
                    ))
                } 
          </div>
          
          <Estimate/>
    </div>
  )
}
