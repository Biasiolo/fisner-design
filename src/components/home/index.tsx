import React from 'react'
import HeroArea from './HeroArea'
import BrandArea from './BrandArea'
import AboutArea from './AboutArea'
import ServiceArea from './ServiceArea'
import HeaderOne from '@/layouts/headers/HeaderOne'
import PortfolioArea from './PortfolioArea'
import TestimonoalArea from './TestimonoalArea'
import BlogArea from './BlogArea'
import ContactArea from './ContactArea'
import FooterOne from '@/layouts/footers/FooterOne'

interface HomeProps {
  dict: any
}

export default function Home({ dict }: HomeProps) {
  return (
    <>
      <HeaderOne dict={dict}/>

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroArea dict={dict.hero} />
            <BrandArea dict={dict.brand} />
            <AboutArea dict={dict.about} />
            <ServiceArea dict={dict.services} />
            <PortfolioArea dict={dict.portfolio} />
            <TestimonoalArea dict={dict.skills} />
            <BlogArea dict={dict.projects} />
            <ContactArea dict={dict.contact} />
          </main>

          <FooterOne dict={dict.footer}/>
        </div>
      </div>
    </>
  )
}
