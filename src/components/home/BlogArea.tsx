import React from 'react'

export default function BlogArea() {
  return (
    <section id="projetos" className="blog-area">
      <div className="container">

        {/* TÍTULO */}
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="section-title wow fadeInUp delay-0-2s">
              <h2>Desenvolvimento de Marcas</h2>
            </div>
          </div>
        </div>

        {/* PROJETO 1 */}
        <div className="row blog-post-box align-items-center">
          <div className="col-lg-6">
            <div className="blog-post-img">
              <a
                href="/pdf/plastica-segura.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/images/final/pro1.png" alt="Plática Segura" />
              </a>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="blog-post-caption">
              <h3>Projeto</h3>
              <h2>
                <a
                  className="link-decoration"
                  href="/pdf/plastica-segura.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Plática Segura – Identidade Visual
                </a>
              </h2>
              <a
                className="theme-btn theme-btn-two"
                href="/pdf/plastica-segura.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Abrir PDF <i className="ri-arrow-right-line"></i>
              </a>
            </div>
          </div>
        </div>

        {/* PROJETO 2 */}
        <div className="row blog-post-box align-items-center">
          <div className="col-lg-6">
            <div className="blog-post-img">
              <a
                href="/pdf/navah.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/images/final/pro2.png" alt="Navah Assessoria" />
              </a>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="blog-post-caption">
              <h3>Projeto</h3>
              <h2>
                <a
                  className="link-decoration"
                  href="/pdf/navah.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Navah Assessoria & Negócios – Branding
                </a>
              </h2>
              <a
                className="theme-btn theme-btn-two"
                href="/pdf/navah.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Abrir PDF <i className="ri-arrow-right-line"></i>
              </a>
            </div>
          </div>
        </div>

        {/* PROJETO 3 */}
        <div className="row blog-post-box align-items-center">
          <div className="col-lg-6">
            <div className="blog-post-img">
              <a
                href="/pdf/vertta.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/images/final/pro3.png" alt="Vertta Odontologia" />
              </a>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="blog-post-caption">
              <h3>Projeto</h3>
              <h2>
                <a
                  className="link-decoration"
                  href="/pdf/vertta.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vertta Odontologia – Brandbook
                </a>
              </h2>
              <a
                className="theme-btn theme-btn-two"
                href="/pdf/vertta.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Abrir PDF <i className="ri-arrow-right-line"></i>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
