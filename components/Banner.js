import React from 'react'
import Image from 'next/image'
import bannerPic from "../papa-abhay-banner.webp"
const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[550px] ">
        <Image src={bannerPic}
        layout="fill"
        objectFit='cover'
        alt="banner"
        />
        <div className="absolute top-1/2 w-full text-center font-mono">
            <p className='text-sm sm:text-lg'>Not Sure where to go ? Perfect.</p>
            <button className='mt-2 bg-yellow-100 rounded-3xl px-4 py-2 text-purple-800 hover:shadow-2xl active:scale-110 transition duration-300 hover:-translate-y-2 hover:bg-purple-600 hover:text-white'>I'm flexible!</button>
        </div>
    </div>
  )
}

export default Banner