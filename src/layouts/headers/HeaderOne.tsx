'use client'

import UseSticky from '@/hooks/UseSticky'
import NavMenu from './NavMenu'
import { useState } from 'react'
import Sidebar from '@/components/common/Sidebar'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type HeaderOneProps = {
  dict: {
    nav: {
      home: string
      about: string
      services: string
      highlights: string
      projects: string
      contact: string
    }
  }
}

/**
 * Language Switch (PT / EN)
 */
function LanguageSwitch() {
  const pathname = usePathname()

  const isEN = pathname.startsWith('/en')

  const toPT = pathname.replace('/en', '/pt')
  const toEN = pathname.replace('/pt', '/en')

  return (
    <div className="language-switch d-flex gap-2 align-items-center">
      <Link
        href={toPT}
        className={isEN ? 'lang-item' : 'lang-item active'}
        title="Português"
      >
        🇧🇷
      </Link>

      <Link
        href={toEN}
        className={isEN ? 'lang-item active' : 'lang-item'}
        title="English"
      >
        🇺🇸
      </Link>
    </div>
  )
}

/**
 * Header
 */
export default function HeaderOne({ dict }: HeaderOneProps) {
  const { sticky } = UseSticky()
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className={`main-header ${sticky ? 'fixed-header' : ''}`}>
        <div className="header-upper">
          <div className="nav-box">
            <div className="header-inner">
              <div className="row align-items-center">

                {/* LOGO + LANGUAGE */}
                <div className="col-xl-2 col-lg-2 col-md-6 col-6 col-sm-3">
                  <div className="logo-area d-flex align-items-center gap-3">
                    <div className="logo wow fadeInUp delay-0-2s">
                      <img
                        src="/assets/images/final/LOGO-AZUL-PRETO.png"
                        alt="Gustavo Fisner"
                      />
                    </div>

                    <LanguageSwitch />
                  </div>
                </div>

                {/* MENU */}
                <div className="col-xl-10 col-lg-10 col-md-6 col-6 col-sm-9">
                  <div className="main-menu d-none d-lg-block">
                    <nav id="mobile-menu">
                      <NavMenu nav={dict.nav} />
                    </nav>
                  </div>

                  {/* MOBILE ICON */}
                  <div className="side-menu-icon d-lg-none text-end">
                    <a
                      style={{ cursor: 'pointer' }}
                      onClick={() => setOpen(!open)}
                      className="info-toggle-btn f-right sidebar-toggle-btn"
                    >
                      <i className="fal fa-bars" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </header>

      <Sidebar open={open} setOpen={setOpen} nav={dict.nav} />
    </>
  )
}
