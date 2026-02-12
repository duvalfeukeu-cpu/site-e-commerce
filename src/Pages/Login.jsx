import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>👤 Se connecter</h2>
        <p>Bienvenue chez DUVALSHOP</p>
        
        <form>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="client@exemple.com" />
          </div>
          
          <div className="form-group">
            <label>Mot de passe</label>
            <input type="password" placeholder="••••••••" />
          </div>

          <button className="btn-login">sign-up</button>
        </form>

        <p className="signup-link">
          Pas encore de compte ? <Link to="/contact">S'inscrire</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;