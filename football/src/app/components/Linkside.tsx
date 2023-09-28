import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type linkProps = {
    href: string,
    name: string,
    src: string,
}

const Linkside = ({href, name, src}:linkProps) => {
  return (
    <Link href={href} className='flex items-center py-2 px-2 rounded-md hover:bg-white hover:text-slate-600 w-full'>
        <Image src={src} alt={name} width={20} height={20} />
        <p className="ml-4 text-xs md:text-sm">{name}</p>
    </Link>
  )
}

export default Linkside