import React from 'react'
import Image from "next/image"
import { HeartIcon , StarIcon } from '@heroicons/react/solid'
const InfoCard = ({result}) => {
  return (
    <div className="flex mt-4 py-7 px-2 border-b cursor-pointer mx-28 hover:opacity-100 hover:shadow-lg hover:scale-110 duration-300 transition ease-out first:border-t">
        <div className="relative h-24 w-40 md:h-48 md:w-60 flex-shrink-0 ">
            <Image src={result.img} alt={result.img} layout="fill" objectFit='cover' className='rounded-3xl'/>
        </div>
        <div className="flex flex-col flex-grow pl-5">
            <div className="flex justify-between">
                <p>{result.location}</p>
                <HeartIcon className='h-7 cursor-pointer'/>
            </div>
            <h4 className='text-xl'>{result.title}</h4>
            <div className='border-b w-10 pt-2 border-gray-300'/>
            <p className='pt-2 text-sm-text-gray-500 flex-grow'>{result.description}</p>
            <div className='flex justify-between items-end pt-5'>
                <p className='flex items-center'>
                    <StarIcon className='h-7 cursor-pointer text-red-400'/>
                    {result.star}
                </p>
                <div>
                    <p className="text-lg font-semibold pb-2 lg:tex-2xl">{result.price}</p>
                    <p className="text-right font-extralight">{result.total}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InfoCard