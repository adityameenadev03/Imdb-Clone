import React from 'react'
import MenuItem from './MenuItem'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6'>

        <div className="flex">
            <MenuItem title="Home" address={'/'} Icon={AiFillHome} />
            <MenuItem title="About" address={'/about'} Icon={BsInfoCircleFill} />
        </div>
        <div className="j">
            <Link href={'/'}>
                <h2 className='tex-2xl-600'> <span className='font-bold text-2xl bg-amber-500 p-1 rounded-lg mr-1'>IMDb</span><span className='text-xl hidden sm:inline'> Clone</span></h2>
            </Link>
        </div>
    </div>
    
    )
}

export default Header