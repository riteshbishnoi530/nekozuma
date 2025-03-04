import { HEADER_LIST } from '@/utils/helper'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className='custom-container mx-auto d-flex justify-content-sm-end pt-sm-4 pt-lg-3 pt-5'>
            <Link href="/" className='position-absolute top-0 start-0'>
                <img className='logo' src="/assets/images/logo.webp" alt="logo" />
            </Link>
            <div className='d-flex align-items-center header-gap'>
                <ul className='d-flex header-gap p-0'>
                    {HEADER_LIST.map((obj, i) => (
                        <li key={i}><Link href={obj.link} className='text-white header-link'>{obj.title}</Link>
                        </li>
                    ))}
                </ul>
                <div className='d-flex gap-3'>
                    <Link target='_blank' href="https://discord.com/"><img className='header-icons' src="/assets/images/discord.webp" alt="discord" /></Link>
                    <Link target='_blank' href="https://x.com/?lang=en"><img className='header-icons' src="/assets/images/twitter.webp" alt="twitter" /></Link>
                </div>
            </div>
        </div>
    )
}

export default Header