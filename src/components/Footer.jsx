import React from 'react'

function Footer() {
  return (
    <div className='footer bg-off-blue position-relative'>
        <img className='position-absolute left-layer' src="/assets/images/footer-left-layer.webp" alt="footer left layer" />
        <img className='position-absolute right-layer' src="/assets/images/footer-right-layer.webp" alt="footer right layer" />
        <h2 className='text-base custom-blue text-white text-center font-franklin footer-heading mb-4'>NEKOZUMA</h2>
        <div className='d-flex justify-content-center gap-4'>
            <a target='_blank' href="https://x.com/?lang=en"><img className='icons' src="/assets/images/twitter.webp" alt="twitter" /></a>
            <a target='_blank' href="https://discord.com/"><img className='icons' src="/assets/images/discord.webp" alt="discord" /></a>
        </div>
    </div>
  )
}

export default Footer