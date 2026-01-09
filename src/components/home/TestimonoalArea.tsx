import React from 'react'

interface SkillItem {
  text: string
  title: string
  subtitle: string
}

interface TestimonoalAreaProps {
  dict: {
    title: string
    items: SkillItem[]
  }
}

export default function TestimonoalArea({ dict }: TestimonoalAreaProps) {
  return (
    <section className="testimonials-area">
      <div className="container">

        {/* TÍTULO */}
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="section-title section-black-title wow fadeInUp delay-0-2s">
              <h2>{dict.title}</h2>
            </div>
          </div>
        </div>

        <div className="row">

          {/* SKILL 1 */}
          <div className="col-lg-4 col-md-6">
            <div className="testimonial-item wow fadeInUp delay-0-2s">
              <div className="author icon-box">
                <i className="fas fa-palette"></i>
              </div>
              <div className="text">
                {dict.items[0].text}
              </div>
              <div className="testi-des">
                <h5>{dict.items[0].title}</h5>
                <span>{dict.items[0].subtitle}</span>
              </div>
            </div>
          </div>

          {/* SKILL 2 */}
          <div className="col-lg-4 col-md-6">
            <div className="testimonial-item wow fadeInUp delay-0-4s">
              <div className="author icon-box">
                <i className="fas fa-bullseye"></i>
              </div>
              <div className="text">
                {dict.items[1].text}
              </div>
              <div className="testi-des">
                <h5>{dict.items[1].title}</h5>
                <span>{dict.items[1].subtitle}</span>
              </div>
            </div>
          </div>

          {/* SKILL 3 */}
          <div className="col-lg-4 col-md-6">
            <div className="testimonial-item wow fadeInUp delay-0-6s">
              <div className="author icon-box">
                <i className="fas fa-lightbulb"></i>
              </div>
              <div className="text">
                {dict.items[2].text}
              </div>
              <div className="testi-des">
                <h5>{dict.items[2].title}</h5>
                <span>{dict.items[2].subtitle}</span>
              </div>
            </div>
          </div>

          {/* SKILL 4 */}
          <div className="col-lg-6 col-md-6">
            <div className="testimonial-item wow fadeInUp delay-0-8s">
              <div className="author icon-box">
                <i className="fas fa-comments"></i>
              </div>
              <div className="text">
                {dict.items[3].text}
              </div>
              <div className="testi-des">
                <h5>{dict.items[3].title}</h5>
                <span>{dict.items[3].subtitle}</span>
              </div>
            </div>
          </div>

          {/* SKILL 5 */}
          <div className="col-lg-6 col-md-6">
            <div className="testimonial-item wow fadeInUp delay-0-9s">
              <div className="author icon-box">
                <i className="fa-solid fa-pen-to-square"></i>
              </div>
              <div className="text">
                {dict.items[4].text}
              </div>
              <div className="testi-des">
                <h5>{dict.items[4].title}</h5>
                <span>{dict.items[4].subtitle}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
