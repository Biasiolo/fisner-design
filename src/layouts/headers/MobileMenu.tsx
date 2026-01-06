"use client"
import React, { useState } from 'react'
import menu_data from './menu_data'
import Link from 'next/link'

export default function MobileMenu() {

  const [navTitle, setNavTitle] = useState("")
  
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("")
    } else {
      setNavTitle(menu)
    }
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    // Verifica se é um link de âncora (#section)
    if (link.startsWith('#')) {
      e.preventDefault()
      
      // Se for apenas '#', volta para o topo
      if (link === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }
      
      const element = document.querySelector(link)
      if (element) {
        // Calcula a posição considerando o header fixo
        const headerHeight = 100 // Ajuste conforme a altura do seu header
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
        // Opcional: fechar o menu mobile após clicar
        // Se você tiver uma função para fechar o menu, chame aqui
      }
    }
  }

  return (
    <>
      <div className="mean-bar"> 
        <nav className="mean-nav">
          <ul>
            {menu_data.map((item, i) => (
              <li key={i} className={`${item.has_dropdown && "has-dropdown"} ${navTitle === item.title ? "dropdown-opened" : ""}`}>
                <Link 
                  href={item.link} 
                  className="linkstyle"
                  onClick={(e) => handleClick(e, item.link)}
                >
                  {item.title}
                </Link>
                {item.has_dropdown &&
                  <>
                    <ul className="sub-menu" style={{ display: navTitle === item.title ? "block" : "none" }}>
                      {item.sub_menus?.map((sub_menu, index) => (
                        <li key={index}>
                          <Link 
                            href={sub_menu.link}
                            onClick={(e) => handleClick(e, sub_menu.link)}
                          >
                            {sub_menu.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <a className={`mean-expand ${navTitle === item.title ? "mean-clicked" : ""}`}
                      onClick={() => openMobileMenu(item.title)}
                      style={{ fontSize: "18px", cursor: "pointer" }}
                    >
                      <i className="fal fa-plus"></i>
                    </a>
                  </>
                }
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}