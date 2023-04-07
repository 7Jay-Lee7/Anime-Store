import React from 'react'
import Image from 'next/image'
import Anime from '../public/Anime.png'

const Hero = () => {
  return (
    <div className='h-[500px] w-full flex justify-center mt-16 mb-[20rem]'>
      <div className='relative h-[500px] w-10/12 mx-auto'>
        <Image className='h-[500px] object-cover rounded-xl' src={Anime} alt="" />
        <div className='absolute top-[10rem] left-[2.5rem] flex flex-col items-center gap-4'>
          <span className='text-[#c34040] xl:font-red text-4xl'>Get some nice <span className='text-red-500'>Anime Figurines</span></span>
          <span className='text-[#c34040] xl:font-red text-3xl'>At a distance of a click</span>
          <button className='mt-6 bg-red-500 text-black px-8 py-2 rounded-xl text-[18px]
          transition-all hover:bg-red-600'>See now</button>
        </div>
      </div>
    </div>
  )
}

export default Hero