import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
      </div>
      <div className="navbar-right">
        <Link to="/" className="nav-link">Inicio</Link>
        <Link to="/equipo" className="nav-link">Equipo</Link>
        <Link to="/contacto" className="nav-link">Contacto</Link>
      </div>
    </nav>
  );
}

export default Navbar;

