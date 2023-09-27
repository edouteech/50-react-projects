import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-2'>
        <Link className='flex' href="/">
            <div className='relative w-[30px] h-[30px] mr-2'>
                <Image src="/football-info.png" alt='logo' fill className='object-cover' />
            </div>
            <span className='text-2xl font-bold none md:block'>Football info</span>
        </Link>
        <p className="text-xs md:text-sm">create by edoutech</p>
    </div>
  )
}

export default Navbar