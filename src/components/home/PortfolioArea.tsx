"use client"
import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'
import ImagePopup from '@/modals/ImagePopup'

import portfolio_img_1 from "@/assets/images/final/dtk1.png"
import portfolio_img_2 from "@/assets/images/final/dtk2.png"
import portfolio_img_3 from "@/assets/images/final/dtk3.png"
import portfolio_img_4 from "@/assets/images/final/dtk4.png"
import portfolio_img_5 from "@/assets/images/final/dtk5.png"

interface PortfolioItem {
  title: string
  category: string
}

interface PortfolioAreaProps {
  dict: {
    items: PortfolioItem[]
  }
}

interface DataType {
  id: number
  col: string
  image: StaticImageData
}

const portfolio_images: DataType[] = [
  { id: 1, col: "6", image: portfolio_img_1 },
  { id: 2, col: "6", image: portfolio_img_2 },
  { id: 3, col: "4", image: portfolio_img_3 },
  { id: 4, col: "4", image: portfolio_img_4 },
  { id: 5, col: "4", image: portfolio_img_5 },
]

export default function PortfolioArea({ dict }: PortfolioAreaProps) {

  const [photoIndex, setPhotoIndex] = useState<number | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleImagePopup = (i: number) => {
    setPhotoIndex(i)
    setIsOpen(true)
  }

  const images = portfolio_images.map(item => item.image.src)

  return (
    <>
      <section id="destaques">
        <div className="projects-area px-4" id="portfolio">
          <div className="container-fluid">
            <div className="row g-4 portfolio-grid">
              {portfolio_images.map((item, i) => (
                <div
                  key={item.id}
                  className={`col-md-6 col-xl-${item.col} portfolio-item category-1`}
                >
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => handleImagePopup(i)}
                    className="work-popup"
                  >
                    <div className="portfolio-box">
                      <Image
                        src={item.image}
                        alt={dict.items[i].title}
                        style={{ height: "auto" }}
                        data-rjs="2"
                      />
                      <span className="portfolio-category">
                        {dict.items[i].category}
                      </span>
                      <div className="portfolio-caption">
                        <h1>{dict.items[i].title}</h1>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image lightbox */}
        {isOpen && photoIndex !== null && (
          <ImagePopup
            images={images}
            setIsOpen={setIsOpen}
            photoIndex={photoIndex}
            setPhotoIndex={setPhotoIndex}
          />
        )}
      </section>
    </>
  )
}
