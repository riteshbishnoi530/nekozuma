import React from 'react'
import Header from './Header'

function Hero() {
    return (
        <div className='position-relative px-3'>
            <Header/>
            <img className='position-absolute hero-layer' src="/assets/images/hero-left-layer.webp" alt="hero layer" />
            <div className="custom-container hero align-items-center d-flex">
                <div className='hero-content w-100'>
                <div className='blue-line m-0'></div>
                    <h1 className='text-xxl custom-blue font-franklin hero-heading'>NEKOZUMA</h1>
                    <p className='custom-white hero-description'>The collection  of 5555 NFTs on the Solana blockchain. The collection serves to be a rising force against the anime meta of collections with undoxxed teams and is therefore backed by the team at Nubbies NFT & Karmic Labs.</p>
                    <button className='conect-wallet-btn'>Connect Wallet</button>
                </div>
                <div>
                    <img className='hero-img' src="/assets/images/nekozuma-hero-img.webp" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero