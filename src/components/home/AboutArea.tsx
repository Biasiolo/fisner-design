import React from 'react'
import Count from '../common/Count'

const counter_data = [
  {
    id: 1,
    title: 'Anos de Experiência',
    count: 5,
    cls: "plus",
  },
  {
    id: 2,
    title: 'Artes Entregues',
    count: 3125,
    cls: "plus",
  },
  {
    id: 3,
    title: 'Marcas Desenvolvidas',
    count: 20,
    cls: "plus",
  },
]

export default function AboutArea() {
  return (
    <>
      <section id="about" className="about-area">
        <div className="container">
          <div className="row">

            {/* TÍTULO LATERAL */}
            <div className="col-lg-3 col-sm-3 ">
              <h2 className="about-pre-title ">Sobre</h2>
            </div>

            {/* CONTEÚDO */}
            <div className="col-lg-9 col-sm-9">
              <div className="about-content-part wow px-3 fadeInUp delay-0-2s">
                <p>
                  Oi, sou Gustavo Fisner, designer com mais de 5 anos de experiência
                  atuando na criação de identidades visuais, projetos de branding
                  e soluções gráficas estratégicas. Desenvolvo marcas que
                  traduzem propósito, personalidade e posicionamento de forma
                  consistente e memorável.
                </p>

                <p>
                  Meu trabalho é baseado em estética,
                  coerência e significado, sempre alinhando criatividade e
                  estratégia para gerar valor real para negócios e pessoas.
                </p>
              </div>

              {/* CONTADORES */}
              <div className="hero-counter-area d-flex justify-content-between wow fadeInUp delay-0-4s">
                {counter_data.map((item, i) => (
                  <div key={i} className="counter-item counter-text-wrap">
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
    </>
  )
}
