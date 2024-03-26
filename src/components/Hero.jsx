import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi";
const Hero = () => {
  return (
    <div className='bg-[#0a192f] w-full h-screen px-6 z-10'>
      {/* container */}
      <div className='flex flex-col justify-center h-full md:pl-[170px] max-w-[1200px] mx-auto'>
        <p className='text-pink-600'>Hi there , welcome to my portfolio</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>my name is zezo magdy</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0] flex flex-col'>I'm a <span className='text-pink-600'>front-end developer</span> </h2>
        <p className='text-[#2e323d] py-4 max-w-[700px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consequatur earum consequuntur accusamus id laudantium quaerat ipsa ex nam velit, quis quasi, commodi, officiis voluptatum error exercitationem iste distinctio esse!</p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            view work <span className='group-hover:rotate-90 duration-300'> <HiArrowNarrowRight className='ml-3'/> </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
