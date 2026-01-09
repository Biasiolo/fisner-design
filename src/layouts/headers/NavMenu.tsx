'use client'

import React from 'react'
import Link from 'next/link'

interface NavMenuProps {
  nav: {
    home: string
    about: string
    services: string
    highlights: string
    projects: string
    contact: string
  }
}
export default function NavMenu({ nav }: NavMenuProps) {
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

   return (
    <ul>
      <li><Link href="#home">{nav.home}</Link></li>
      <li><Link href="#about">{nav.about}</Link></li>
      <li><Link href="#services">{nav.services}</Link></li>
      <li><Link href="#destaques">{nav.highlights}</Link></li>
      <li><Link href="#projetos">{nav.projects}</Link></li>
      <li><Link href="#contact">{nav.contact}</Link></li>
    </ul>
  )
}
