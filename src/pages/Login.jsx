import { useState, useContext, useRef, useEffect } from 'react'; // 👈 1. Imports nécessaires
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/User'; // 👈 Import du Context
import '../App.css'; // Assure-toi que ton CSS est importé

function Login() {
  // --- A. LES ÉTATS (Pour stocker ce qu'on tape) ---
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // --- B. LES HOOKS (Outils) ---
  const { login } = useContext(UserContext); // Pour se connecter
  const navigate = useNavigate(); // Pour changer de page
  const emailInputRef = useRef(null); // 👈 Le "Doigt" pour le focus (Jour 34)

  // --- C. LE FOCUS AUTOMATIQUE (Dès que la page charge) ---
  useEffect(() => {
    if(emailInputRef.current) {
      emailInputRef.current.focus(); // 👈 On met le focus dans l'email
    }
  }, []);

  // --- D. LA FONCTION DE CONNEXION ---
  const handleLogin = (e) => {
    e.preventDefault(); // Empêche la page de se recharger
    
    // Petite astuce : On utilise la partie avant le @ comme nom d'utilisateur
    // Ex: "duval@gmail.com" devient "duval"
    const username = email.split('@')[0]; 
    
    if (username) {
      login(username); // On envoie le nom au Context
      navigate('/boutique'); // On redirige vers la boutique
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>👤 Se connecter</h2>
        <p>Bienvenue chez DUVALSHOP</p>
        
        <form onSubmit={handleLogin}> {/* 👈 On attache la fonction ici */}
          
          <div className="form-group">
            <label>Email</label>
            <input 
              ref={emailInputRef} /* 👈 1. On attache la référence ICI */
              type="email" 
              placeholder="client@exemple.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)} // On met à jour l'état
              required
            />
          </div>
          
          <div className="form-group">
            <label>Mot de passe</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn-login">
            Se connecter
          </button>
        </form>

        <p className="signup-link">
          Pas encore de compte ? <Link to="/contact">S'inscrire</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;