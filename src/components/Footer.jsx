import React from 'react'
import Link from 'next/link'

function Footer() {
    return (
        <div className='footer bg-off-blue position-relative'>
            <img className='position-absolute left-layer' src="/assets/images/footer-left-layer.webp" alt="footer left layer" />
            <img className='position-absolute right-layer' src="/assets/images/footer-right-layer.webp" alt="footer right layer" />
            <Link className='text-base custom-blue d-flex justify-content-center text-white text-center font-franklin footer-heading mb-4' href="/">NEKOZUMA</Link>
            <div className='d-flex justify-content-center gap-4'>
                <Link target='_blank' href="https://x.com/?lang=en" ><img className='icons' src="/assets/images/twitter.webp" alt="twitter" /></Link>
                <Link target='_blank' href="https://discord.com/" ><img className='icons' src="/assets/images/discord.webp" alt="discord" /></Link>
            </div>
        </div>
    )
}

export default Footer