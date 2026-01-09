'use client'

import React from 'react'
import MobileMenu from '@/layouts/headers/MobileMenu'

interface SidebarProps {
  open: boolean
  setOpen: (open: boolean) => void
  nav: {
    home: string
    about: string
    services: string
    highlights: string
    projects: string
    contact: string
  }
}

export default function Sidebar({ open, setOpen, nav }: SidebarProps) {
  return (
    <>
      <div className={`sidebar__area ${open ? 'sidebar-opened' : ''}`}>
        <div className="sidebar__wrapper">
          <div className="sidebar__close">
            <button
              className="sidebar__close-btn"
              id="sidebar__close-btn"
              onClick={() => setOpen(false)}
            >
              <i className="fal fa-times"></i>
            </button>
          </div>

          <div className="sidebar__content mt-50 mb-20">
            <div className="mobile-menu fix mean-container">
              <MobileMenu nav={nav} />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`body-overlay ${open ? 'opened' : ''}`}
        onClick={() => setOpen(false)}
      />
    </>
  )
}
