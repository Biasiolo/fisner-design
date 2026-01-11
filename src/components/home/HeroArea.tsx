"use client"

import { useEffect, useState } from 'react'

interface HeroDict {
  description: string
  cta: string
}

interface HeroAreaProps {
  dict: HeroDict
}

export default function HeroArea({ dict }: HeroAreaProps) {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const newScale = Math.max(0.5, 1 - scrollY * 0.002)
      setScale(newScale)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="home" className="main-hero-area hero-fisner h-100">

      {/* 🎥 VIDEO BACKGROUND */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/assets/videos/video1.mov" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="hero-overlay"></div>

      {/* CONTEÚDO */}
      <div className="justify-content-center h-100 align-items-center hero-content-wrapper ">
        <div className="row justify-content-center align-items-center h-100 ">

          {/* TEXTO */}
          <div className="col-lg-5 order-1 order-lg-2 pb-4">
            <div
              className="
                hero-content mb-4 wow fadeInDown delay-0-2s
                d-flex flex-column
                align-items-center align-items-lg-center
                text-center text-lg-center
              "
            >
              <div className="w-100 d-flex justify-content-center">
                <img
                  src="/assets/images/final/LOGO-VERDE.png"
                  alt="Gustavo Fisner Design"
                  className="img-fluid hero-logo hero-logo-zoom"
                  style={{
                    transform: `scale(${scale})`,
                    transition: 'transform 0.5s linear',
                  }}
                />
              </div>

              <div className="hero-box d-flex justify-content-center">
                <p className="hero-description text-center  my-4">
                  {dict.description}
                </p>
              </div>

              <a
                href="https://wa.me/5511986192043?text=Olá%20Gustavo!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
                target="_blank"
                rel="noopener noreferrer"
                className="theme-btn hero-btn d-inline-flex justify-content-center align-items-center"
              >
                {dict.cta}
              </a>
            </div>
          </div>

          {/* FOTO */}
          <div className="foto-box col-lg-7 order-2 order-lg-1">
            <div className="hero-image wow fadeInUp delay-0-2s">
              <img
                src="/assets/images/final/hero1.png"
                alt="Gustavo Fisner"
                className="img-fluid hero-photo"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
