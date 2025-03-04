import React from 'react'

function Story() {
  return (
    <div className='story'>
      <div className='px-3'>
        <div className="custom-container">
          <h2 className='text-xl custom-blue text-center story-heading font-franklin'>Story</h2>
          <p className='custom-white text-center'>Nekozuma which means lightning cats in Japanese (Neko = Cats // Inazuma = Lightning) is a collection of 5555 NFTs on the Solana blockchain. The story centers around 3 eras of cats living in different timelines - past, present, future. In each timeline, there are 3 deities that are all powerful and are meant to protect the world of Nekos.</p>
          <p className='custom-white text-center text-sm story-description'>However at every junction in time, there is always a darkness that is waiting to overthrow the good. Hence, each timeline has its own arch nemesis. This means that there will be a total of 4 godly nekos from each timeline making a total of 12 godly nekos that will be fully animated.</p>
        </div>
      </div>
      <img className='w-100' src="/assets/images/story-image.webp" alt="story image" />
      <div className='blue-line'></div>
    </div>
  )
}

export default Story