import React from 'react'
import menu_data from './menu_data'
import Link from 'next/link'

export default function NavMenu() {
  
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
      }
    }
  }

  return (
    <>
      <ul>
        {menu_data.map((item, i) => (
          <li key={i} className={`${item.has_dropdown && "has-dropdown"}`}>
            <Link 
              href={item.link}
              onClick={(e) => handleClick(e, item.link)}
            >
              {item.title}
            </Link>
            {item.has_dropdown &&
              <ul className="sub-menu">
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
            }
          </li>
        ))} 
      </ul>
    </>
  )
}