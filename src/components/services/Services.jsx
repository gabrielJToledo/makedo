import React from 'react'
import './Services.css'

function Services() {
  return (
    <div className="services">
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="wrapper px-3">
          <div className="d-flex justify-content-center">
            <div className="division"></div>
          </div>

          <div className="d-flex justify-content-lg-start justify-content-center">
            <p className='bg-services fs-1 p-2 fw-bold'>Nós criamos seu site do <br /> conceito ao delivery</p>
          </div>

          <div className="row mt-5">
            <div className="col-12 col-md-3">
              <p className='fw-light mb-5 servicos-p fs-1'>Identidade <br /> Visual</p>
              <p className='fw-light mb-0 servicos-p fs-1'>Conteúdo</p>
            </div>

            <div className="col-12 col-md-3">
              <p className='fw-light mb-5 servicos-p fs-1'>Criação de Personas</p>
              <p className='fw-light mb-0 servicos-p fs-1'>Tom de Voz</p>
            </div>

            <div className="col-12 col-md-3">
              <p className='fw-light mb-5 servicos-p fs-1'>Atendimento e gestão</p>
              <p className='fw-light mb-0 servicos-p fs-1'>Criação de sites</p>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <div className="division"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services