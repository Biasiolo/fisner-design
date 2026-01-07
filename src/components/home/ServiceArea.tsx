import React from 'react'

const WHATSAPP_BASE =
  'https://wa.me/5511986192043?text='

const message = (service: string) =>
  encodeURIComponent(
    `Olá Gustavo! Tenho interesse no serviço de ${service} e gostaria de conversar melhor.`
  )

export default function ServiceArea() {
  return (
    <section id="services" className="services-area">
      <div className="container">

        {/* TÍTULO */}
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
            <a
              href={`${WHATSAPP_BASE}${message('Branding & Posicionamento')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="service-link"
            >
              <div className="service-item wow fadeInUp delay-0-2s">
                <i className="ri-arrow-right-up-line"></i>
                <h5>01</h5>
                <h4>Branding & Posicionamento</h4>
                <p>
                  Criação e desenvolvimento de marcas estratégicas, alinhando
                  propósito, personalidade e posicionamento para construir
                  identidades fortes, coerentes e memoráveis.
                </p>

                <span className="service-cta">
                  Falar no WhatsApp →
                </span>
              </div>
            </a>
          </div>

          {/* Identidade Visual */}
          <div className="col-lg-5 col-md-5">
            <a
              href={`${WHATSAPP_BASE}${message('Identidade Visual')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="service-link"
            >
              <div className="service-item wow fadeInUp delay-0-4s">
                <i className="ri-arrow-right-up-line"></i>
                <h5>02</h5>
                <h4>Identidade Visual</h4>
                <p>
                  Sistemas visuais, incluindo logotipo, tipografia, cores e
                  aplicações, com consistência em pontos de contato da marca.
                </p>

                <span className="service-cta">
                  Solicitar orçamento →
                </span>
              </div>
            </a>
          </div>

          {/* Artes */}
          <div className="col-lg-6 col-md-5">
            <a
              href={`${WHATSAPP_BASE}${message('Artes para Postagens')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="service-link"
            >
              <div className="service-item wow fadeInUp delay-0-6s">
                <i className="ri-arrow-right-up-line"></i>
                <h5>03</h5>
                <h4>Artes para Postagens</h4>
                <p>
                  Criação de artes estratégicas para redes sociais, focadas em
                  comunicação visual clara e alinhamento com a marca.
                </p>

                <span className="service-cta">
                  Conversar sobre o projeto →
                </span>
              </div>
            </a>
          </div>

          {/* Banners */}
          <div className="col-lg-6 col-md-7">
            <a
              href={`${WHATSAPP_BASE}${message('Banners & Materiais Gráficos')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="service-link"
            >
              <div className="service-item wow fadeInUp delay-0-8s">
                <i className="ri-arrow-right-up-line"></i>
                <h5>04</h5>
                <h4>Banners & Materiais Gráficos</h4>
                <p>
                  Desenvolvimento de banners e materiais gráficos digitais ou
                  impressos, com impacto visual e estratégia.
                </p>

                <span className="service-cta">
                  Pedir proposta →
                </span>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
