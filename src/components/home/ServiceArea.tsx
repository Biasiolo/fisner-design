import React from 'react'

const WHATSAPP_BASE =
  'https://wa.me/5511986192043?text='

interface ServiceAreaProps {
  dict: {
    title: string
    whatsappMessage: string
    items: {
      branding: {
        title: string
        description: string
        cta: string
      }
      visualIdentity: {
        title: string
        description: string
        cta: string
      }
      socialMedia: {
        title: string
        description: string
        cta: string
      }
      banners: {
        title: string
        description: string
        cta: string
      }
    }
  }
}

export default function ServiceArea({ dict }: ServiceAreaProps) {
  const message = (service: string) =>
    encodeURIComponent(
      dict.whatsappMessage.replace('{{service}}', service)
    )

  return (
    <section id="services" className="services-area">
      <div className="container">

        {/* TÍTULO */}
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="section-title section-black-title wow fadeInUp delay-0-2s">
              <h2>{dict.title}</h2>
            </div>
          </div>
        </div>

        <div className="row">

          {/* Branding */}
          <div className="col-lg-7 col-md-7">
            <a
              href={`${WHATSAPP_BASE}${message(dict.items.branding.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="service-link"
            >
              <div className="service-item wow fadeInUp delay-0-2s">
                <i className="ri-arrow-right-up-line"></i>
                <h5>01</h5>
                <h4>{dict.items.branding.title}</h4>
                <p>{dict.items.branding.description}</p>
                <span className="service-cta">
                  {dict.items.branding.cta}
                </span>
              </div>
            </a>
          </div>

          {/* Identidade Visual */}
          <div className="col-lg-5 col-md-5">
            <a
              href={`${WHATSAPP_BASE}${message(dict.items.visualIdentity.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="service-link"
            >
              <div className="service-item wow fadeInUp delay-0-4s">
                <i className="ri-arrow-right-up-line"></i>
                <h5>02</h5>
                <h4>{dict.items.visualIdentity.title}</h4>
                <p>{dict.items.visualIdentity.description}</p>
                <span className="service-cta">
                  {dict.items.visualIdentity.cta}
                </span>
              </div>
            </a>
          </div>

          {/* Artes */}
          <div className="col-lg-6 col-md-5">
            <a
              href={`${WHATSAPP_BASE}${message(dict.items.socialMedia.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="service-link"
            >
              <div className="service-item wow fadeInUp delay-0-6s">
                <i className="ri-arrow-right-up-line"></i>
                <h5>03</h5>
                <h4>{dict.items.socialMedia.title}</h4>
                <p>{dict.items.socialMedia.description}</p>
                <span className="service-cta">
                  {dict.items.socialMedia.cta}
                </span>
              </div>
            </a>
          </div>

          {/* Banners */}
          <div className="col-lg-6 col-md-7">
            <a
              href={`${WHATSAPP_BASE}${message(dict.items.banners.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="service-link"
            >
              <div className="service-item wow fadeInUp delay-0-8s">
                <i className="ri-arrow-right-up-line"></i>
                <h5>04</h5>
                <h4>{dict.items.banners.title}</h4>
                <p>{dict.items.banners.description}</p>
                <span className="service-cta">
                  {dict.items.banners.cta}
                </span>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
