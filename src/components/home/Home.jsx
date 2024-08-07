import React from 'react'
import './Home.css'
import Button from '@mui/material/Button';

import projGis from "../../assets/images/proj-gis.jpg"
import logo from "../../assets/images/logo.png"

function Home() {
  return (
    <div className="home">
      <div className="container--black d-flex justify-content-center w-100 px-4">
        <div className="wrapper">
          <div className='my-5'>
            <p className='home-text secondary-color'>
              Nós <br /> construímos <br /> sites que <br /> <span className='fw-bold'>vendem</span>
            </p>

            <p className='secondary-color fw-bold text-p_mobile'>A Makedo é uma empresa que te ajuda a construir a sua <br /> presença online além das redes sociais através da sua <br /> identidade visual e do seu site.</p>

            <button className='btn--whiteAndBlack'>START</button>
          </div>
        </div>
      </div>

      <div className='d-flex justify-content-center w-100 my-5 px-4'>
        <div className="wrapper">
          <h1 className='h2-home mb-3 h1-mobile'>Projetos recentes</h1>

          <p className='fs-5 text-p_mobile'>Confira alguns dos projetos que desenvolvemos para nossos clientes. <br /> Cada um deles foi criado com cuidado e atenção aos detalhes para <br /> atender às necessidades específicas de cada negócio.</p>

          <div className="w-100 d-flex justify-content-center mt-5">
            <img className='w-75' src={projGis} alt="Projeto Gislaine" title='Projeto Gislaine' />
          </div>
        </div>
      </div>

      <div className='d-flex justify-content-center w-100 my-5'>
        <div className="wrapper d-flex flex-column justify-content-center align-items-center">
          <h2 className='text-center my-4 h2-home h1-mobile'>Sobre Nós</h2>

          <p className='text-center mb-4 text-p_mobile'>Somos uma equipe de especialistas em marketing e design que acredita no <br /> poder das pequenas empresas. Nosso objetivo é ajudar empreendedores e <br />  empresas de todos os tamanhos a construir sua presença online e alcançar o <br /> sucesso.</p>

          <img className='logo-home mb-5 w-50' src={logo} alt="Logo Makedo" title='Logo Makedo' />
        </div>


      </div>

      <div className="d-flex justify-content-center">
        <div className="wrapper d-flex justify-content-center">
          <div className="division w-75"></div>
        </div>
      </div>
    </div>
  )
}

export default Home