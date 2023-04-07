import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import img1 from '../public/assets/Naruto.jpg'
import img2 from '../public/assets/Deku.jpg'
import img3 from '../public/assets/Ichigo-Kurosaki.jpg'
import img4 from '../public/assets/Tanjiro-Kamado.jpg'
import img5 from '../public/assets/Luffy.jpg'
import img6 from '../public/assets/Meliodas.jpg'

const Categories = () => {
  return (
    <div className='h-full w-full flex justify-center'>
      <div className='h-full w-10/12'>
        {/* title */}
        <h2 className='mb-8 text-3xl text-[#333]'>Categories</h2>
        <div className='h-full w-full flex items-center justify-between'>
          {/* category */}
          <Link href='/category/Naruto' className="h-[325px] w-[325px] relative">
            <Image src={img1} alt="" className="h-full w-full object-cover" />
            <span className="absolute bottom-0 left-0 bg-red-500 px-6 py-2 text-white">Naruto</span>
          </Link>
          {/* category */}
          <Link href='/category/Hero Academia' className="h-[325px] w-[325px] relative">
            <Image src={img2} alt="" className="h-full w-full object-cover" />
            <span className="absolute bottom-0 left-0 bg-red-500 px-6 py-2 text-white">Hero Academia</span>
          </Link>
          {/* category */}
          <Link href='/category/Bleach' className="h-[325px] w-[325px] relative" >
            <Image src={img3} alt="" className="h-full w-full object-cover" />
            <span className="absolute bottom-0 left-0 bg-red-500 px-6 py-2 text-white">Bleach</span>
          </Link>
        </div>
        <div className="h-[325px] w-full flex items-center justify-between">
          {/* category */}
          <Link href='/category/Demon Slayer' className="h-[325px] w-[325px] relative" >
            <Image src={img4} alt="" className="h-full w-full object-cover" />
            <span className="absolute bottom-0 left-0 bg-red-500 px-6 py-2 text-white">Demon Slayer</span>
          </Link>
          {/* category */}
          <Link href='/category/One Piece' className="h-[325px] w-[325px] relative" >
            <Image src={img5} alt="" className="h-full w-full object-cover" />
            <span className="absolute bottom-0 left-0 bg-red-500 px-6 py-2 text-white">One Piece</span>
          </Link>
          {/* category */}
          <Link href='/category/Seven Deadly Sins' className="h-[325px] w-[325px] relative" >
            <Image src={img6} alt="" className="h-full w-full object-cover" />
            <span className="absolute bottom-0 left-0 bg-red-500 px-6 py-2 text-white">Seven Deadly Sins</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Categories