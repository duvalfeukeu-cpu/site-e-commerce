import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

// 👇 1. On récupère la prop "cartCount"
function Navbar({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/" className="logo">DUVALSHOP</Link>
        
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </div>

        <div className={`nav-links ${menuOpen ? "mobile-menu" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Accueil</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>À Propos</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          
          <Link to="/login" className="login-link" onClick={() => setMenuOpen(false)}>
            👤 Connexion
          </Link>
          
          {/* 👇 2. On affiche le vrai nombre ici */}
          <Link to="/panier" className="cart-btn" onClick={() => setMenuOpen(false)}>
            Panier <span className="cart-count">{cartCount}</span>
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;