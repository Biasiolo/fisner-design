"use client"

import { useEffect, useState } from 'react'

export default function HeroArea() {
  const [scale, setScale] = useState(1)



  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      // controle da escala
      const newScale = Math.max(0.8, 1 - scrollY * 0.0055)

      setScale(newScale)


    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="home" className="main-hero-area hero-fisner">
      <div className="container align-items-center pt-4">
        <div className="row  mt-3">

          {/* FOTO */}
          <div className="col-lg-6">
            <div className="hero-image  wow fadeInDown delay-0-2s px-2">
              <img
                src="/assets/images/final/hero1.png"
                alt="Gustavo Fisner"
                className=" hero-photo"
              />
            </div>
          </div>

          {/* CONTEÚDO */}
          <div className="col-lg-6">
            <div className="hero-content wow fadeInUp delay-0-2s
              d-flex flex-column
              align-items-center align-items-lg-start
              text-center text-lg-start">

              {/* LOGO COM ZOOM OUT */}
              <div className="w-100 d-flex justify-content-center my-4">
                <img
                  src="/assets/images/final/LOGO-VERDE.png"
                  alt="Gustavo Fisner Design"
                  className="img-fluid hero-logo hero-logo-zoom"
                  style={{
                    transform: `scale(${scale})`,
                    transition: 'transform 0.2s linear',
                  }}
                />
              </div>

              <p className="hero-description mb-4">
                Criações que traduzem propósito, personalidade
                e estratégia, desenvolvendo marcas, campanhas e projetos com estética
                , coerência e significado.
              </p>

              <a
                href="#contato"
                className="theme-btn hero-btn d-inline-flex justify-content-center align-items-center w-100"
              >
                Entre em contato
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
