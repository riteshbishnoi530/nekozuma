import { HEADER_LIST} from '@/utils/helper'
import React from 'react'

const Header = () => {
    return (
            <div className='custom-container mx-auto d-flex justify-content-sm-end pt-sm-4 pt-lg-3 pt-5'>
                <a href="/" className='position-absolute top-0 start-0'>
                    <img className='logo' src="/assets/images/logo.webp" alt="logo" />
                </a>
                <div className='d-flex align-items-center header-gap'>
                    <ul className='d-flex header-gap p-0'>
                        {HEADER_LIST.map((obj, i) => (
                            <li key={i}><a href={obj.link} className='text-white header-link'>{obj.title}</a>
                            </li>
                        ))}
                    </ul>
                    <div className='d-flex gap-3'>
                        <a target='_blank' href="https://discord.com/"><img className='header-icons' src="/assets/images/discord.webp" alt="discord" /></a>
                        <a target='_blank' href="https://x.com/?lang=en"><img className='header-icons' src="/assets/images/twitter.webp" alt="twitter" /></a>
                    </div>
                </div>
            </div>
    )
}

export default Header