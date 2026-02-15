import { Link } from 'react-router-dom';
import '../App.css';
import { useWindowSize } from '../hooks/useWindowSize'; // 👈 1. Importe ton hook

function LandingPage() {
  // 👇 2. Utilise-le ! (C'est tout simple maintenant)
  const width = useWindowSize();
  
  // On décide que "Mobile" c'est moins de 768px
  const isMobile = width < 768;

  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1>Bienvenue chez DUVALSHOP 🚀</h1>
        
        {/* 👇 3. On affiche la largeur en direct pour tester */}
        <p style={{ color: '#febd69', fontWeight: 'bold' }}>
          Largeur actuelle : {width}px
        </p>

        <p>
          {isMobile 
            ? "La meilleure tech dans votre poche." // Texte pour Mobile
            : "La technologie de demain, livrée chez vous aujourd'hui." // Texte pour PC
          }
        </p>
        
        <Link to="/boutique" className="btn-enter">
          {isMobile ? "Voir le Shop" : "Entrer dans la boutique"} 🛍️
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;