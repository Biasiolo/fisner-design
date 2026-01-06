import React from 'react'

export default function TestimonoalArea() {
  return (
    <section className="testimonials-area">
      <div className="container">

        {/* TÍTULO */}
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="section-title section-black-title wow fadeInUp delay-0-2s">
              <h2>Skills & Ferramentas</h2>
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
                Desenvolvimento de identidades visuais sólidas, alinhando
                estética, posicionamento e propósito de marca.
              </div>
              <div className="testi-des">
                <h5>Design Gráfico</h5>
                <span>Estratégia • Conceito • Consistência</span>
              </div>
            </div>
          </div>

          {/* SKILL 2 */}
          <div className="col-lg-4 col-md-6">
            <div className="testimonial-item wow fadeInUp delay-0-4s">
              <div className="author icon-box">
                <i className="fas fa-layer-group"></i>
              </div>
              <div className="text">
                Criação de interfaces intuitivas e funcionais, focadas em
                experiência do usuário, clareza e conversão.
              </div>
              <div className="testi-des">
                <h5>UI / UX Design</h5>
                <span>Usabilidade • Fluxos • Design Funcional</span>
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
                Direção criativa aplicada a campanhas, projetos digitais e
                materiais gráficos com narrativa visual consistente.
              </div>
              <div className="testi-des">
                <h5>Direção Criativa</h5>
                <span>Conceito • Estética • Comunicação</span>
              </div>
            </div>
          </div>

          {/* FERRAMENTA / SOFT SKILL */}
          <div className="col-lg-6 col-md-6">
            <div className="testimonial-item wow fadeInUp delay-0-8s">
              <div className="author icon-box">
                <i className="fas fa-comments"></i>
              </div>
              <div className="text">
                Capacidade de comunicação clara com clientes e equipes,
                traduzindo ideias e objetivos em soluções visuais eficazes.
              </div>
              <div className="testi-des">
                <h5>Comunicação & Colaboração</h5>
                <span>Briefing • Feedback • Trabalho em Equipe</span>
              </div>
            </div>
          </div>

          {/* FERRAMENTA */}
          <div className="col-lg-6 col-md-6">
            <div className="testimonial-item wow fadeInUp delay-0-9s">
              <div className="author icon-box">
                <i className="fa-solid fa-pen-to-square"></i>
              </div>
              <div className="text">
                Ecossistema completo para criação gráfica, edição, motion e
                materiais visuais de alta qualidade.
              </div>
              <div className="testi-des">
                <h5>Adobe Creative Cloud</h5>
                <span>Photoshop • Illustrator • After Effects</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
