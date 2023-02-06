import Link from 'next/link'
import React from 'react'

const MenuItem = ({title,address,Icon}) => {
  return (
    <div className='py-1' >
        <Link href={address} className="mx-4 lg:mx-6  hover:text-amber-600 ">
        <Icon className="text-2xl sm:hidden mx-4  "/>
        <p className='hidden sm:inline text-sm'>{title.toUpperCase()}</p>
        </Link>
    </div>

  )
}

export default MenuItem