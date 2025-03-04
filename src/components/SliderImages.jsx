import { SLIDER_ONE, SLIDER_TWO } from '@/utils/helper'
import React from 'react'

function SliderImages() {
  return (
    <div id='overview' className='slider-container'>
        <div className='d-flex justify-content-center slide-one'>
            {SLIDER_ONE.map((image, index) => (
                <img className='slider-images' key={index} src={image} alt="image" />
            ))}
        </div>
        <div className='d-flex justify-content-center slide-two'>
        {SLIDER_TWO.map((image, index) => (
                <img className='slider-images' key={index} src={image} alt="image" />
            ))}
            
        </div>
    </div>
  )
}

export default SliderImages