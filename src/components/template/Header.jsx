import React, { useState } from 'react';
import './Header.css';
import { siteName, menu } from '../../global';
import logoImg from '../../assets/images/logo.png';
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Headroom from 'react-headroom';

function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className='w-100' id='headerSection'>
      <Headroom>
        <div className="header z-index20 wrapper d-flex align-items-center justify-content-between px-4">

          <div className="d-flex align-items-center">
            <img className='logo me-3' src={logoImg} title={`Logo da ${siteName}`} alt={`Logo da ${siteName}`} />

            <div className="ms-5 d-none d-md-flex">
              {menu.map((item, index) => (
                <Link
                  className={`menu_item text-decoration-none mx-3 ${currentPath === `/${item.link}` ? 'active' : ''}`}
                  to={item.link}
                  key={index}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="d-none d-md-flex">
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

          <div className={`menu-icon ${isOpen ? 'open' : ''} d-sm-flex d-md-none d-lg-none`} onClick={toggleMenu}>
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="2x" />
          </div>
        </div>
      </Headroom>
    </header>
  );
}

export default Header;
