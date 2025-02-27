'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { sliderData } from './SliderData'
import './Banner.css'

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="banner-container">
      <div className="banner" style={{ background: sliderData[currentSlide].bgColor }}>
        <div className="banner-content">
          <h1>{sliderData[currentSlide].title}</h1>
          <p>{sliderData[currentSlide].description}</p>
          <Link href={sliderData[currentSlide].link}>
            <button className="banner-button">{sliderData[currentSlide].buttonText}</button>
          </Link>
        </div>
      </div>

      <div className="slider-dots">
        {sliderData.map((_, index) => (
          <button
            key={index}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Banner
