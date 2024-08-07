import React from 'react'
import './Footer.css'
import logoFooter from '../../assets/images/logo-footer.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer px-4 w-100 d-flex justify-content-center">
      <div className="wrapper">
        <div className="d-flex flex-lg-row flex-column flex-sm-column my-5 footer-mobile">
          <img className='w-25' src={logoFooter} alt="Logo Makedo" title='Logo Makedo' />

          <div className='d-flex flex-lg-row flex-column flex-sm-column w-100 mt-5 justify-content-around d-sm-flex footer-mobile'>
            <div className='height-footer-div-mobile'>
              <p className='fw-bold fs-2'>E-mail</p>

              <p>
                contato@makedo.me
              </p>
            </div>

            <div className='height-footer-div-mobile'>
              <p className='fw-bold fs-2'>Telefone </p>
              <p> (11) 98876-3443</p>
            </div>

            <div className='height-footer-div-mobile'>
              <a className='social-icons mx-2' href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a className='social-icons mx-2' href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a className='social-icons mx-2' href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer