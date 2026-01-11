"use client"

import React, { useState } from 'react'

const ITEMS_PER_PAGE = 3

const projects = [
  {
    title: 'Club Essenza Wine & Co.',
    pdf: '/pdf/CLUB.ESSENZA-CAMPANHA DE LANÇAMENTO.pdf',
    image: '/assets/images/final/pro1.png',
    alt: 'Club Essenza Wine & Co.',
  },
  {
    title: 'Traluz Energia Solar',
    pdf: '/pdf/TRALUZ-MANUAL DA MARCA.pdf',
    image: '/assets/images/final/pro2.png',
    alt: 'Traluz Energia Solarz',
  },
  {
    title: 'Yamada Odontologia',
    pdf: '/pdf/YAMADA ODONTOLOGIA-CAMPANHA MÊS DAS MÃES.pdf',
    image: '/assets/images/final/pro3.png',
    alt: 'Yamada Odontologia',
  },
  {
    title: 'Navah Assessoria & Negócios',
    pdf: '/pdf/NAVAH-MANUAL DA MARCA.pdf',
    image: '/assets/images/final/pro4.png',
    alt: 'Navah Assessoria & Negócios',
  },
  {
    title: 'Plástica Segura',
    pdf: '/pdf/PLASTICA-SEGURA-MANUAL DA MARCA.pdf',
    image: '/assets/images/final/pro5.png',
    alt: 'Plástica Segura',
  },
  {
    title: 'Vertta Odontologia',
    pdf: '/pdf/VERTTA-ODONTOLOGIA-MANUAL DA MARCA.pdf',
    image: '/assets/images/final/pro6.png',
    alt: 'Vertta Odontologia',
  },

]

interface BlogAreaProps {
  dict: {
    title: string
    label: string
    openPdf: string
    prev: string
    next: string
  }
}

export default function BlogArea({ dict }: BlogAreaProps) {
  const [page, setPage] = useState(0)

  const start = page * ITEMS_PER_PAGE
  const currentProjects = projects.slice(start, start + ITEMS_PER_PAGE)
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE)

  const handlePageChange = (newPage: number) => {
  if (newPage < 0 || newPage >= totalPages) return

  setPage(newPage)

  setTimeout(() => {
    const section = document.getElementById('projetos')
    if (section) {
      const yOffset = -80
      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset

      window.scrollTo({
        top: y,
        behavior: 'smooth',
      })
    }
  }, 50)
}

  return (
    <section id="projetos" className="blog-area">
      <div className="container">

        {/* TÍTULO */}
        <div className="row">
          <div className="col-xl-12">
            <div className="section-title">
              <h2>{dict.title}</h2>
            </div>
          </div>
        </div>

        {/* PROJETOS */}
        {currentProjects.map((project, index) => (
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
                <h3>{dict.label}</h3>
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
                  {dict.openPdf} <i className="ri-arrow-right-line" />
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* PAGINAÇÃO */}
        <div className="row mt-5">
          <div className="col-lg-12 text-center d-flex justify-content-center gap-3">

            <button
              className="theme-btn theme-btn-two w-100"
              disabled={page === 0}
              onClick={() => handlePageChange(page - 1)}
            >
              {dict.prev}
            </button>

            <button
              className="theme-btn theme-btn-two w-100"
              disabled={page + 1 >= totalPages}
              onClick={() => handlePageChange(page + 1)}
            >
              {dict.next}
            </button>

          </div>
        </div>

      </div>
    </section>
  )
}
