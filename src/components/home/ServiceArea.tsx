import React from 'react'

export default function ServiceArea() {
  return (
    <>
      <section id="services" className="services-area">
        <div className="container">

          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title section-black-title wow fadeInUp delay-0-2s">
                <h2>Serviços</h2>
              </div>
            </div>
          </div>

          <div className="row">

            {/* Branding */}
            <div className="col-lg-7 col-md-7">
              <div className="service-item wow fadeInUp delay-0-2s">
                <i className="ri-arrow-right-up-line"></i>
                <h5>01</h5>
                <h4>Branding & Posicionamento</h4>
                <p>
                  Criação e desenvolvimento de marcas estratégicas, alinhando
                  propósito, personalidade e posicionamento para construir
                  identidades fortes, coerentes e memoráveis.
                </p>
              </div>
            </div>

            {/* Identidade Visual */}
            <div className="col-lg-5 col-md-5">
              <div className="service-item wow fadeInUp delay-0-4s">
                <i className="ri-arrow-right-up-line"></i>
                <h5>02</h5>
                <h4>Identidade Visual</h4>
                <p>
                  Sistemas visuais completos, incluindo logotipo,
                  tipografia, cores e aplicações, com consistência em 
                  pontos de contato da marca.
                </p>
              </div>
            </div>

            {/* Artes para Redes Sociais */}
            <div className="col-lg-6 col-md-5">
              <div className="service-item wow fadeInUp delay-0-6s">
                <i className="ri-arrow-right-up-line"></i>
                <h5>03</h5>
                <h4>Artes para Postagens</h4>
                <p>
                  Criação de artes estratégicas para redes sociais, focadas em
                  comunicação visual clara, estética forte e alinhamento com a
                  identidade da marca.
                </p>
              </div>
            </div>

            {/* Banners e Materiais Gráficos */}
            <div className="col-lg-6 col-md-7">
              <div className="service-item wow fadeInUp delay-0-8s">
                <i className="ri-arrow-right-up-line"></i>
                <h5>04</h5>
                <h4>Banners & Materiais Gráficos</h4>
                <p>
                  Desenvolvimento de banners, peças promocionais e materiais gráficos
                  digitais ou impressos, com impacto visual, clareza e estratégia
                  de comunicação.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
