import React from 'react'
import Count from '../common/Count'

interface AboutAreaProps {
  dict: {
    preTitle: string
    paragraphs: string[]
    counters: {
      experience: string
      projects: string
      brands: string
    }
  }
}

export default function AboutArea({ dict }: AboutAreaProps) {
  const counter_data = [
    {
      id: 1,
      title: dict.counters.experience,
      count: 5,
      cls: 'plus',
    },
    {
      id: 2,
      title: dict.counters.projects,
      count: 3125,
      cls: 'plus',
    },
    {
      id: 3,
      title: dict.counters.brands,
      count: 20,
      cls: 'plus',
    },
  ]

  return (
    <section id="about" className="about-area pt-3">
      <div className="container pt-4 mt-4">

        {/* AVATARES */}
        <div className="row">
          <div className="col-12 d-flex justify-content-center pb-3">
            <div className="testimonial-avatars wow fadeInDown delay-0-2s mb-4">
              <img src="/assets/images/final/dep2.png" alt="Gustavo Fisner" />
              <img src="/assets/images/final/dep1.png" alt="Gustavo Fisner" />
              <img src="/assets/images/final/dep3.png" alt="Gustavo Fisner" />
            </div>
          </div>
        </div>

        <div className="row">

          {/* TÍTULO LATERAL */}
          <div className="col-lg-3 col-sm-3">
            <h2 className="about-pre-title">{dict.preTitle}</h2>
          </div>

          {/* CONTEÚDO */}
          <div className="col-lg-9 col-sm-9">
            <div className="about-content-part wow px-3 fadeInUp delay-0-2s text-justify">
              {dict.paragraphs.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>

            {/* CONTADORES */}
            <div className="hero-counter-area d-flex justify-content-between wow fadeInUp delay-0-4s">
              {counter_data.map((item) => (
                <div key={item.id} className="counter-item counter-text-wrap">
                  <span className={`count-text ${item.cls}`}>
                    <Count number={item.count} />
                  </span>
                  <span className="counter-title">{item.title}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
