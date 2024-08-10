import React from 'react'

const More = () => {
  return (
    <div className='More'>
     <div className='w-full'>
      <div className="relative group w-full overflow-hidden ">
        <img
          src="mens-tshirt.jpeg"
          alt="More"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col gap-5 items-center justify-center p-4 bg-black bg-opacity-50 ">
        <p className='text-white text-5xl md:text-6xl lg:text-8xl'>Clothing is Here</p>
        <p className='text-white text-2xl md:text-3xl lg:text-4xl'>DROP-003 OUT NOW</p>
        <button className='flex item-center w-16 h-8 justify-center bg-white text-black'>Shop now</button>
      
        </div>
      </div>
     
    </div>
    </div>
  )
}

export default More
