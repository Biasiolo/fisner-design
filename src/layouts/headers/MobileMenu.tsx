'use client'

import React from 'react'
import Link from 'next/link'

interface MobileMenuProps {
  nav: {
    home: string
    about: string
    services: string
    highlights: string
    projects: string
    contact: string
  }
}

export default function MobileMenu({ nav }: MobileMenuProps) {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: string
  ) => {
    if (!link.startsWith('#')) return

    e.preventDefault()

    const element = document.querySelector(link)
    if (!element) return

    const headerHeight = 100
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition =
      elementPosition + window.pageYOffset - headerHeight

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }

  // 🔒 segurança extra (evita crash se algo vier errado)
  if (!nav) return null

  return (
    <div className="mean-bar">
      <nav className="mean-nav">
        <ul>
          <li>
            <Link href="#home" onClick={(e) => handleClick(e, '#home')}>
              {nav.home}
            </Link>
          </li>

          <li>
            <Link href="#about" onClick={(e) => handleClick(e, '#about')}>
              {nav.about}
            </Link>
          </li>

          <li>
            <Link
              href="#services"
              onClick={(e) => handleClick(e, '#services')}
            >
              {nav.services}
            </Link>
          </li>

          <li>
            <Link
              href="#destaques"
              onClick={(e) => handleClick(e, '#destaques')}
            >
              {nav.highlights}
            </Link>
          </li>

          <li>
            <Link
              href="#projetos"
              onClick={(e) => handleClick(e, '#projetos')}
            >
              {nav.projects}
            </Link>
          </li>

          <li>
            <Link
              href="#contact"
              onClick={(e) => handleClick(e, '#contact')}
            >
              {nav.contact}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
