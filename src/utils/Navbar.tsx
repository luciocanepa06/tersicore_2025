import { useState } from 'react';
import { NavLink} from "react-router";
import { useNavigate } from "react-router-dom";
import { ReactSVG } from 'react-svg';

import logo from "../assets/logo.svg";

import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const displayMenu = () => {
    if(isMenuOpen){
      return(
        <>
          x
        </>
      )
    }else{
      return(
        <>
          ☰
        </>
      )
    }
  }

  return (
    <div className={`navbar-container`}>

      <div className="logo-burger-container">
        <ReactSVG
          beforeInjection={(svg) => {
            svg.setAttribute('style', 'filter: blur(10px)');
          }}
          afterInjection={(svg) => {
            svg.setAttribute('style', 'filter: blur(0px)');
          }}
          className="svg-logo"
          onClick={() => {
            navigate("/");
          }}
          src={logo}
          title="Logo Tersicore"
        />

        <div className="burger-menu" onClick={toggleMenu}>
          {displayMenu()}
        </div>

      </div>


      <nav className={`nav-links${isMenuOpen ? '-open' : ''}`}>
        <NavLink to="/" end>
            Home
        </NavLink>
        <NavLink to="/chi-siamo">
            Chi siamo
        </NavLink>
        <NavLink to="/direttore">
            Direttore
        </NavLink>
        <NavLink to="/calendario">
            Calendario
        </NavLink>
        <NavLink to="/repertorio">
            Repertorio
        </NavLink>        
        <NavLink to="/galleria">
            Galleria
        </NavLink>
      </nav>

    </div>
  );
}

export default Navbar;