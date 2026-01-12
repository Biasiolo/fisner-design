"use client"
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'

interface ContactAreaProps {
  dict: any
}

export default function ContactArea({ dict }: ContactAreaProps) {
  const pathname = usePathname()
  const currentLang = pathname.startsWith('/en') ? 'en' : 'pt'
  const resumeUrl = `/pdf/cv-${currentLang}.pdf`

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [service, setService] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const whatsappNumber = '5511986192043'

    const text = [
      dict.whatsappMessage.greeting,
      '',
      dict.whatsappMessage.interest,
      '',
      `${dict.whatsappMessage.name} ${name}`,
      `${dict.whatsappMessage.email} ${email}`,
      `${dict.whatsappMessage.service} ${service}`,
      '',
      dict.whatsappMessage.message,
      message,
      '',
      dict.whatsappMessage.closing,
    ].join('\n')

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="contact" className="contact-area">
      <div className="container">

        {/* TÍTULO */}
        <div className="row">
          <div className="col-12">
            <div className="section-title section-black-title">
              <h2>{dict.title}</h2>
            </div>
          </div>
        </div>

        {/* COLUNAS */}
        <div className="row">

          {/* INFORMAÇÕES */}
          <div className="col-lg-4 mb-4">
            <div className="contact-content-part">

              <div className="single-contact">
                <span className="circle-btn"><i className="ri-map-pin-line"></i></span>
                <h2>{dict.locationTitle}</h2>
                <p>{dict.locationValue}</p>
              </div>

              <div className="single-contact">
                <span className="circle-btn"><i className="ri-whatsapp-line"></i></span>
                <h2>{dict.whatsappTitle}</h2>
                <p>+55 11 98619-2043</p>
              </div>

              <div className="single-contact">
                <span className="circle-btn"><i className="ri-mail-line"></i></span>
                <h2>{dict.emailTitle}</h2>
                <p>gustavofisnerdesign@gmail.com</p>
              </div>

              <div className="single-contact">
                <h2>{dict.socialTitle}</h2>
                <div className="about-social">
                  <ul>
                    <li>
                      <a href="https://www.instagram.com/gustavo.fisner.design" target="_blank" rel="noreferrer">
                        <i className="ri-instagram-line"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/gustavo-fisner-miguel-a0077325b/?locale=en_US" target="_blank" rel="noreferrer">
                        <i className="ri-linkedin-fill"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

          {/* FORMULÁRIO */}
          <div className="col-lg-8 mb-4">
            <div className="contact-form contact-form-area">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="row">

                  <div className="col-md-6">
                    <div className="form-group">
                      <label>{dict.form.nameLabel}</label>
                      <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder={dict.form.namePlaceholder}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label>{dict.form.emailLabel}</label>
                      <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder={dict.form.emailPlaceholder}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <label>{dict.form.serviceLabel}</label>
                      <select
                        className="form-control"
                        value={service}
                        onChange={e => setService(e.target.value)}
                        required
                      >
                        <option value="">{dict.form.servicePlaceholder}</option>
                        {dict.form.services.map((item: string, index: number) => (
                          <option key={index} value={item}>{item}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <label>{dict.form.messageLabel}</label>
                      <textarea
                        className="form-control"
                        rows={4}
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        placeholder={dict.form.messagePlaceholder}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="theme-btn">
                      {dict.form.submit} <i className="ri-whatsapp-line"></i>
                    </button>
                  </div>

                </div>
              </form>
            </div>
          </div>

        </div>

        {/* BOTÃO DOWNLOAD ABAIXO DAS COLUNAS */}
        <div className="row mt-4">
          <div className="col-12 d-flex justify-content-center">
            <a
              href={resumeUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="theme-btn w-50 text-center d-flex justify-content-center align-items-center gap-2 fw-4"
            > {dict.download}
              {currentLang === 'pt' ? (
                <>
                  {/* BANDEIRA BR */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="28" height="28" ><path fill="#699635" d="M61.5 26.8C59.1 12.7 46.8 2 32 2S4.9 12.7 2.5 26.8L32 12zm-59 10.4C4.9 51.3 17.2 62 32 62s27.1-10.7 29.5-24.8L32 52z"/><path fill="#ffe62e" d="M32 12L2.5 26.8C2.2 28.5 2 30.2 2 32s.2 3.5.5 5.2L32 52l29.5-14.8c.3-1.7.5-3.4.5-5.2s-.2-3.5-.5-5.2z"/><g fill="#428bc1"><path d="M26 28.4c-3.2 0-6.2.7-8.9 1.9c-.1.6-.1 1.1-.1 1.7c0 8.3 6.7 15 15 15c5.6 0 10.5-3.1 13.1-7.6c-3.7-6.5-10.9-11-19.1-11"/><path d="M46.8 34.4c.1-.8.2-1.6.2-2.4c0-8.3-6.7-15-15-15c-5.9 0-11 3.4-13.5 8.4c2.4-.7 4.9-1.1 7.5-1.1c8.5 0 16 4 20.8 10.1"/></g><g fill="#fff"><path d="M26 24.3c-2.6 0-5.1.4-7.5 1.1c-.7 1.5-1.2 3.1-1.4 4.9c2.7-1.2 5.7-1.9 8.9-1.9c8.2 0 15.4 4.4 19.1 10.9c.9-1.5 1.4-3.2 1.7-4.9C42 28.3 34.5 24.3 26 24.3"/><circle cx="22" cy="32" r="1"/><circle cx="26" cy="38" r="1"/><circle cx="32" cy="38" r="1"/><circle cx="32" cy="42" r="1"/><circle cx="40" cy="38" r="1"/><circle cx="40" cy="42" r="1"/><circle cx="36" cy="40" r="1"/><circle cx="22" cy="36" r="1"/></g></svg>
                  {dict.downloadCv}
                </>
              ) : (
                <>
                  {/* BANDEIRA US */}
                  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g clip-path="url(#US_svg__a)">
        <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"
            fill="#F0F0F0" />
        <path
            d="M11.477 12H24a12.01 12.01 0 0 0-.413-3.13H11.478V12Zm0-6.262h10.761a12.064 12.064 0 0 0-2.769-3.13h-7.992v3.13ZM12 24c2.824 0 5.42-.976 7.47-2.609H4.53A11.948 11.948 0 0 0 12 24ZM1.761 18.26h20.477a11.93 11.93 0 0 0 1.348-3.13H.413c.3 1.116.758 2.167 1.348 3.13Z"
            fill="#D80027"
        />
        <path
            d="M5.559 1.874h1.093l-1.017.739.389 1.196-1.018-.74-1.017.74.336-1.033c-.896.746-1.68 1.62-2.328 2.594h.35l-.647.47c-.1.168-.197.34-.29.513l.31.951-.578-.419C1 7.19.868 7.5.75 7.817l.34 1.048h1.258l-1.017.74.388 1.195-1.017-.739-.61.443C.033 10.994 0 11.494 0 12h12V0C9.63 0 7.42.688 5.559 1.874Zm.465 8.926-1.018-.739-1.017.739.389-1.196-1.017-.739h1.257l.388-1.195.389 1.195h1.257l-1.017.74.389 1.195Zm-.389-4.691.389 1.195-1.018-.739-1.017.74.389-1.196-1.017-.74h1.257l.388-1.195.389 1.196h1.257l-1.017.739Zm4.693 4.691-1.017-.739-1.017.739.388-1.196-1.017-.739h1.257l.389-1.195.388 1.195h1.258l-1.018.74.389 1.195Zm-.389-4.691.389 1.195-1.017-.739-1.017.74.388-1.196-1.017-.74h1.257l.389-1.195.388 1.196h1.258l-1.018.739Zm0-3.496.389 1.196-1.017-.74-1.017.74.388-1.196-1.017-.739h1.257L9.311.678l.388 1.196h1.258l-1.018.739Z"
            fill="#0052B4"
        />
    </g>
    <defs>
        <clipPath id="US_svg__a">
            <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
    </defs>
</svg>
                  {dict.downloadCv}
                </>
              )}
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
