"use client"

import { useEffect, useState } from 'react'

export default function HeroArea() {
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
    <section id="home" className="main-hero-area hero-fisner">
      <div className="container align-items-center pt-4">
        <div className="row mt-3 align-items-center">

          {/* CONTEÚDO */}
          <div className="col-lg-5 order-1 order-lg-2">
            <div
              className="hero-content wow fadeInUp delay-0-2s
              d-flex flex-column
              align-items-center align-items-lg-start
              text-center text-lg-start"
            >

              {/* LOGO COM ZOOM OUT */}
              <div className="w-100 d-flex justify-content-center my-4">
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

              <p className="hero-description text-center pb-2">
                Criações que traduzem propósito, personalidade
                e estratégia, desenvolvendo marcas, campanhas e projetos com estética,
                coerência e significado.
              </p>

              <a
                href="#contato"
                className="theme-btn hero-btn d-inline-flex justify-content-center align-items-center w-100 mb-4"
              >
                Entre em contato
              </a>

            </div>
          </div>

          {/* FOTO */}
          <div className="col-lg-7 order-2 order-lg-1">
            <div className="hero-image wow fadeInDown delay-0-2s px-2">
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
