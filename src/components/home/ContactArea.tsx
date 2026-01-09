"use client"
import React, { useState } from 'react'

interface ContactAreaProps {
  dict: any
}

export default function ContactArea({ dict }: ContactAreaProps) {
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

    const encodedText = encodeURIComponent(text)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`

    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="contact" className="contact-area">
      <div className="container">

        {/* TÍTULO */}
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="section-title section-black-title">
              <h2>{dict.title}</h2>
            </div>
          </div>
        </div>

        <div className="row">

          {/* INFORMAÇÕES */}
          <div className="col-lg-4 mb-2">
            <div className="contact-content-part">

              <div className="single-contact">
                <span className="circle-btn">
                  <i className="ri-map-pin-line"></i>
                </span>
                <h2>{dict.locationTitle}</h2>
                <p>{dict.locationValue}</p>
              </div>

              <div className="single-contact">
                <span className="circle-btn">
                  <i className="ri-whatsapp-line"></i>
                </span>
                <h2>{dict.whatsappTitle}</h2>
                <p>+55 11 98619-2043</p>
              </div>

              <div className="single-contact">
                <span className="circle-btn">
                  <i className="ri-mail-line"></i>
                </span>
                <h2>{dict.emailTitle}</h2>
                <p>gustavofisnerdesign@gmail.com</p>
              </div>

              <div className="single-contact">
                <h2>{dict.socialTitle}</h2>
                <div className="about-social">
                  <ul>
                    <li>
                      <a target="_blank" href="https://www.instagram.com/gustavo.fisner.design">
                        <i className="ri-instagram-line"></i>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://www.linkedin.com/in/gustavo-fisner-miguel-a0077325b/?locale=en_US">
                        <i className="ri-linkedin-fill"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

          {/* FORMULÁRIO */}
          <div className="col-lg-8 mb-2">
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

                  <div className="col-md-12">
                    <div className="form-group">
                      <label>{dict.form.serviceLabel}</label>
                      <select
                        className="form-control"
                        value={service}
                        onChange={e => setService(e.target.value)}
                        required
                      >
                        <option value="">
                          {dict.form.servicePlaceholder}
                        </option>
                        {dict.form.services.map((item: string, index: number) => (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="col-md-12">
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

                  <div className="col-md-12">
                    <div className="form-group mb-0">
                      <button type="submit" className="theme-btn">
                        {dict.form.submit} <i className="ri-whatsapp-line"></i>
                      </button>
                    </div>
                  </div>

                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
