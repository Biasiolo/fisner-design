import React from 'react'

export default function FooterOne() {
  return (
    <>
      <footer className="main-footer">
        <div className="container">

          {/* AVATARES */}
          <div className="row">
            <div className="col-lg-12">

              <div className="col-12 d-flex justify-content-center pt-3">
                <div className="testimonial-avatars wow fadeInDown delay-0-2s">
                  <img src="/assets/images/final/dep2.png" alt="Gustavo Fisner" />
                  <img src="/assets/images/final/dep1.png" alt="Gustavo Fisner" />
                  <img src="/assets/images/final/dep3.png" alt="Gustavo Fisner" />
                </div>
              </div>

              <div className="col-lg-12 col-sm-6 footer-top text-center">
                <p>Tem um projeto?</p>
                <h2>
                  <a
                    href="https://wa.me/5511986192043"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Vamos trabalhar juntos!
                  </a>
                </h2>
              </div>
            </div>
          </div>

          {/* FOOTER BOTTOM */}
          <div className="row align-items-center mt-4 pb-4">

            {/* ESQUERDA */}
            <div className="col-lg-4 col-sm-12 text-center text-lg-start order-2 order-lg-1">
              <p className="copy-left-text mb-0">
                Desenvolvido por{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/rafael-biasiolo/"
                >
                  Biasiolo®
                </a>
              </p>
            </div>

            {/* LOGO CENTRAL */}
            <div className="col-lg-4 col-sm-12 text-center my-lg-0 order-1 order-lg-2">
              <img
                src="/assets/images/final/LOGO-VERDE.png"
                alt="Fisner Design"
                style={{
                  height: '42px',
                  opacity: 0.6,
                }}
              />
              <span
                style={{
                  fontSize: '12px',
                  marginLeft: '4px',
                  opacity: 0.6,
                }}
              >
                ®
              </span>
            </div>

            {/* DIREITA */}
            <div className="col-lg-4 col-sm-12 text-center text-lg-end order-3 order-lg-3">
              <p className="copy-right-text mb-0">
                © Copyright {new Date().getFullYear()}
              </p>
            </div>

          </div>

        </div>
      </footer>
    </>
  )
}
