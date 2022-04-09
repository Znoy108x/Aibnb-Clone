import React from 'react'
import Image from "next/image"
const LargeCard = ({img , title , description , buttonText}) => {
  return (
    <div className="cursor-pointer py-16  relative">
        <div className="relative h-96  min-w-[300px] ">
          <Image src={img} alt={title}
          layout="fill"
          objectFit="cover"
          className='rounded-2xl'
          />
        </div>
        <div className='absolute top-32 left-12'>
          <h3 className='text-4xl mb-32 w-64'>{title}</h3>
          <p>{description}</p>
          <button  className="mt-2 bg-black rounded-3xl px-4 py-2 text-white hover:shadow-2xl active:scale-110 transition duration-300 hover:-translate-y-2 hover:bg-purple-400 hover:text-black ">{buttonText}</button>
        </div>
    </div>
  )
}

export default LargeCard