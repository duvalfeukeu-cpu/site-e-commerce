import { Link } from 'react-router-dom';
import '../App.css'; // On utilisera le CSS global ou crée un Landing.css spécifique

function LandingPage() {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1>Bienvenue chez DUVALSHOP 🚀</h1>
        <p>La technologie de demain, livrée chez vous aujourd'hui.</p>
        
        {/* Le bouton qui mène vers les produits */}
        <Link to="/boutique" className="btn-enter">
          Voir les articles
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;