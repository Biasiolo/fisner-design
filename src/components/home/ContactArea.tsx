"use client"
import React, { useState } from 'react'

export default function ContactArea() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [service, setService] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const whatsappNumber = '5511986192043'

    const text = [
  'Olá Gustavo!',
  '',
  'Tenho interesse em um orçamento com os seguintes dados:',
  '',
  `► Nome: ${name}`,
  `► Email: ${email}`,
  `► Serviço: ${service}`,
  '',
  '► Mensagem:',
  message,
  '',
  'Aguardo retorno',
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
            <div className="section-title section-black-title wow fadeInUp delay-0-2s">
              <h2>Contato</h2>
            </div>
          </div>
        </div>

        <div className="row">

          {/* INFORMAÇÕES */}
          <div className="col-lg-4">
            <div className="contact-content-part wow fadeInUp delay-0-2s">

              <div className="single-contact">
                <span className="circle-btn">
                  <i className="ri-map-pin-line"></i>
                </span>
                <h2>Localização</h2>
                <p>São José dos Campos – SP</p>
              </div>

              <div className="single-contact">
                <span className="circle-btn">
                  <i className="ri-whatsapp-line"></i>
                </span>
                <h2>WhatsApp</h2>
                <p>+55 11 98619-2043</p>
              </div>

              <div className="single-contact">
                <span className="circle-btn">
                  <i className="ri-mail-line"></i>
                </span>
                <h2>Email</h2>
                <p>gustavofisnerdesign@gmail.com</p>
              </div>

              <div className="single-contact">
                <h2>Redes</h2>
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
          <div className="col-lg-8">
            <div className="contact-form contact-form-area wow fadeInUp delay-0-4s">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="row">

                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Nome</label>
                      <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Seu nome"
                        required
                      />
                      <label className="for-icon"><i className="far fa-user"></i></label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="seu@email.com"
                        required
                      />
                      <label className="for-icon"><i className="far fa-envelope"></i></label>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Serviço desejado</label>
                      <select
                        className="form-control"
                        value={service}
                        onChange={e => setService(e.target.value)}
                        required
                      >
                        <option value="">Selecione um serviço</option>
                        <option value="Branding / Identidade Visual">Branding / Identidade Visual</option>
                        <option value="UI / UX Design">UI / UX Design</option>
                        <option value="Direção Criativa">Direção Criativa</option>
                        <option value="Materiais Gráficos">Materiais Gráficos</option>
                        <option value="Outro">Outro</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Mensagem</label>
                      <textarea
                        className="form-control"
                        rows={4}
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        placeholder="Conte um pouco sobre o seu projeto"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group mb-0">
                      <button type="submit" className="theme-btn">
                        Enviar para WhatsApp <i className="ri-whatsapp-line"></i>
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
