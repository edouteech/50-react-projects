import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiHome } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-2'>
        <Link className='flex text-sky-900 items-center' href="/">
            <BiHome className="text-2xl mr-2" />
            <span className='text-2xl font-bold none md:block'>Football Analitycs</span>
        </Link>
        <p className="text-sm text-slate-500">create by <a className='text-xl text-sky-600 uppercase' href="https://edoutech.com">edoutech</a></p>
    </div>
  )
}

export default Navbar