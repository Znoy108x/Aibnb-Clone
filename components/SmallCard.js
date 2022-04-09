import React from 'react'
import Image from "next/image"
const SmallCard = ({distance , img , location}) => {
  return (
      <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:scale-110 duration-100 transition transform ease-out '>
          <div className='relative h-16 w-16'>
            <Image src={img} 
            layout="fill" alt={location} className="rounded-lg"/>
          </div>
          <div className="">
              <h2>{location}</h2>
              <h2 className='text-gray-500'>{distance}</h2>
          </div>
      </div>
  )
}

export default SmallCard