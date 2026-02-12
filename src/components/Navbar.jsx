import { useState, useContext } from 'react'; // 👈 Import useContext
import { Link } from 'react-router-dom';
import { UserContext } from '../context/User'; // 👈 Import du contexte
import './Navbar.css';

function Navbar({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);
  
  // 👇 On récupère l'utilisateur connecté
  const { user, logout } = useContext(UserContext);

  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/" className="logo">DUVALSHOP</Link>
        
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </div>

        <div className={`nav-links ${menuOpen ? "mobile-menu" : ""}`}>
          
          {/* 👇 MODIFICATION : Accueil mène à la Landing Page */}
          <Link to="/" onClick={() => setMenuOpen(false)}>Accueil</Link>
          
          {/* 👇 NOUVEAU : Lien vers les produits */}
          <Link to="/boutique" onClick={() => setMenuOpen(false)}>Boutique 🛍️</Link>
          
          <Link to="/about" onClick={() => setMenuOpen(false)}>À Propos</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          
          {/* 👇 LOGIQUE UTILISATEUR (Afficher Nom ou Connexion) */}
          {user ? (
            <span 
              className="login-link" 
              style={{ cursor: 'pointer', color: '#febd69' }} 
              onClick={() => { logout(); setMenuOpen(false); }}
            >
              👋 {user.name} (Déco)
            </span>
          ) : (
            <Link to="/login" className="login-link" onClick={() => setMenuOpen(false)}>
              👤 Connexion
            </Link>
          )}
          
          <Link to="/panier" className="cart-btn" onClick={() => setMenuOpen(false)}>
            Panier <span className="cart-count">{cartCount}</span>
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;