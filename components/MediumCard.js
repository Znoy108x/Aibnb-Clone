import React from 'react'
import Image from "next/image"
const MediumCard = ({img , title}) => {
  return (
    <div className="cursor pointer hover:scale-110 transition duration-300  flex-col relative group">
        <div className='group-hover:opacity-50 group-hover:brightness-50 relative h-80 w-80 mr-6'>
          <Image src={img} layout="fill" alt="medium image" className="rounded-lg"/>
        </div>
          <h2 className='group-hover:visible  invisible text-xs absolute top-1/2 text-white left-[75px]'>{title}</h2>
    </div>
  )
}

export default MediumCard