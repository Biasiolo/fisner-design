"use client"

import React, { useState, useRef } from 'react'


const ITEMS_PER_PAGE = 3

const projects = [
  {
    title: 'Plástica Segura – Identidade Visual',
    pdf: '/pdf/plastica-segura.pdf',
    image: '/assets/images/final/pro1.png',
    alt: 'Plástica Segura',
  },
  {
    title: 'Navah Assessoria & Negócios – Branding',
    pdf: '/pdf/navah.pdf',
    image: '/assets/images/final/pro2.png',
    alt: 'Navah Assessoria',
  },
  {
    title: 'Vertta Odontologia – Brandbook',
    pdf: '/pdf/vertta.pdf',
    image: '/assets/images/final/pro3.png',
    alt: 'Vertta Odontologia',
  },
  {
    title: 'Vertta Odontologia – Brandbook',
    pdf: '/pdf/vertta.pdf',
    image: '/assets/images/final/pro3.png',
    alt: 'Vertta Odontologia',
  },
  {
    title: 'Vertta Odontologia – Brandbook',
    pdf: '/pdf/vertta.pdf',
    image: '/assets/images/final/pro3.png',
    alt: 'Vertta Odontologia',
  },
  {
    title: 'Vertta Odontologia – Brandbook',
    pdf: '/pdf/vertta.pdf',
    image: '/assets/images/final/pro3.png',
    alt: 'Vertta Odontologia',
  },
  {
    title: 'Vertta Odontologia – Brandbook',
    pdf: '/pdf/vertta.pdf',
    image: '/assets/images/final/pro3.png',
    alt: 'Vertta Odontologia',
  },
  {
    title: 'Vertta Odontologia – Brandbook',
    pdf: '/pdf/vertta.pdf',
    image: '/assets/images/final/pro3.png',
    alt: 'Vertta Odontologia',
  },
]

export default function BlogArea() {
  const [page, setPage] = useState(0)
 

  const start = page * ITEMS_PER_PAGE
  const currentProjects = projects.slice(start, start + ITEMS_PER_PAGE)
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE)

  const handlePageChange = (newPage: number) => {
  setPage(newPage)

  setTimeout(() => {
    const section = document.getElementById('projetos')
    if (section) {
      const yOffset = -80 // ajuste se tiver header fixo
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset

      window.scrollTo({
        top: y,
        behavior: 'smooth',
      })
    }
  }, 50)
}

  return (
    <section id="projetos" className="blog-area" >
      <div className="container">

        {/* TÍTULO */}
        <div className="row">
          <div className="col-xl-12">
            <div className="section-title">
              <h2>Projetos</h2>
            </div>
          </div>
        </div>

        {/* PROJETOS */}
        {currentProjects.map((project: { pdf: string | undefined; image: string | undefined; alt: string | undefined; title: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined }, index: React.Key | null | undefined) => (
          <div className="row blog-post-box align-items-center" key={index}>
            <div className="col-lg-6">
              <div className="blog-post-img">
                <a href={project.pdf} target="_blank" rel="noopener noreferrer">
                  <img src={project.image} alt={project.alt} />
                </a>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="blog-post-caption">
                <h3>Projeto</h3>
                <h2>
                  <a
                    className="link-decoration"
                    href={project.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h2>
                <a
                  className="theme-btn theme-btn-two"
                  href={project.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Abrir PDF <i className="ri-arrow-right-line" />
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* PAGINAÇÃO */}
        <div className="row mt-5">
          <div className="col-lg-12 text-center d-flex justify-content-center gap-3">

            <button
              className="theme-btn theme-btn-two"
              disabled={page === 0}
              onClick={() => handlePageChange(page - 1)}
            >
              ← Anterior
            </button>

            <button
              className="theme-btn theme-btn-two"
              disabled={page + 1 >= totalPages}
              onClick={() => handlePageChange(page + 1)}
            >
              Próximo →
            </button>

          </div>
        </div>

      </div>
    </section>
  )
}
