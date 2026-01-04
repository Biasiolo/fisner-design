import React from 'react'

export default function HeroArea() {
  return (
    <section id="home" className="main-hero-area hero-fisner">
      <div className="container align-items-center pt-4">
        <div className="row align-items-center mt-3">

          {/* COLUNA ESQUERDA – FOTO */}
          <div className="col-lg-6">
            <div className="hero-image wow fadeInLeft delay-0-2s px-2">
              <img
                src="/assets/images/final/IMG_6551-removebg-preview.png"
                alt="Gustavo Fisner"
                className="img-fluid hero-photo"
              />
            </div>
          </div>

          {/* COLUNA DIREITA – LOGO + TEXTO */}
          <div className="col-lg-6">
            <div className="hero-content wow fadeInUp delay-0-2s
                  d-flex flex-column
                  align-items-center align-items-lg-start
                  text-center text-lg-start">

              {/* LOGO */}
              <div className="w-100 d-flex justify-content-center my-4">
                <img
                  src="/assets/images/final/LOGO-VERDE.png"
                  alt="Gustavo Fisner Design"
                  className="img-fluid hero-logo"
                />
              </div>

              {/* TEXTO */}
              <p className="hero-description mb-4">
                Criação de identidades visuais que traduzem propósito, personalidade
                e estratégia, desenvolvendo marcas, campanhas e projetos com estética
                forte, coerência e significado, pensados para se conectar de forma real
                com as pessoas.
              </p>

              {/* BOTÃO */}
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
