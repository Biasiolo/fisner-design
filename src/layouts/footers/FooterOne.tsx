import React from 'react'

export default function FooterOne() {
  return (
    <>
      <footer className="main-footer">
        <div className="container">
          
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

          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <p className="copy-left-text">
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
            <div className="col-lg-6 col-sm-6">
              <p className="copy-right-text">
                © Copyright {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
