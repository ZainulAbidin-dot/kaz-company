import BallCanvas from '@/components/Ball'
import React from 'react'
import partner1 from '@/assets/images/partner1.jpg'
import partner2 from '@/assets/images/partner2.jpg'
import partner3 from '@/assets/images/partner3.jpg'
import partner4 from '@/assets/images/partner4.jpg'
import partner5 from '@/assets/images/partner5.jpg'
import partner6 from '@/assets/images/partner6.jpg'
import partner7 from '@/assets/images/partner7.jpg'
import partner8 from '@/assets/images/partner8.jpg'
import partner9 from '@/assets/images/partner9.jpg'
import partner10 from '@/assets/images/partner10.jpg'
import partner11 from '@/assets/images/partner11.jpg'
import partner12 from '@/assets/images/partner12.jpg'
import partner13 from '@/assets/images/partner13.jpg'
import partner14 from '@/assets/images/partner14.jpg'
import partner15 from '@/assets/images/partner15.jpg'
import partner16 from '@/assets/images/partner16.jpg'
import partner17 from '@/assets/images/partner17.jpg'
import partner18 from '@/assets/images/partner18.jpg'
import partner19 from '@/assets/images/partner19.jpg'
import partner20 from '@/assets/images/partner20.jpg'

const Projects = () => {
  const partners = [
    partner6, partner7, partner8, partner9, partner10,
    partner11, partner12, partner13, partner14, partner15, partner16, partner17, partner18, partner19,
    partner20
  ];
  return (
    <div>
      <h1 className='ml-10 text-left'>Partners & Affiliates</h1>
      <div className='flex flex-wrap justify-center gap-10 my-10'>
        {partners.map((partner, index) => (
          <div className='w-48 h-48  '  key={index}>
            <BallCanvas icon={partner} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects