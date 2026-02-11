import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-content">
        {/* LE LOGO */}
        <Link to="/" className="logo">DUVALSHOP</Link>
        
        {/* 👇 LE BOUTON BURGER (C'est lui qui avait disparu ?) */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </div>

        {/* LES LIENS (Menu) */}
        <div className={`nav-links ${menuOpen ? "mobile-menu" : ""}`}>
          
          <Link to="/" onClick={() => setMenuOpen(false)}>Accueil</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>À Propos</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          
          {/* Le Nouveau Bouton Connexion */}
          <Link to="/login" className="login-link" onClick={() => setMenuOpen(false)}>
            👤 Connexion
          </Link>
          
          {/* Le Bouton Panier */}
          <Link to="/panier" className="cart-btn" onClick={() => setMenuOpen(false)}>
            Panier <span className="cart-count">0</span>
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;