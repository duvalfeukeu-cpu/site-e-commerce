import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about-container">
      {/* Bannière ou Image Héros */}
      <div className="about-hero">
        <h1>Notre Histoire</h1>
        <p>Plus qu'une boutique, une vision pour l'Afrique.</p>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h2>Qui sommes-nous ?</h2>
          <p>
            Fondée en 2026 à Douala, <strong>DUVALShop</strong> (par Duval Tech) est née d'une ambition simple : 
            rendre le e-commerce accessible, rapide et fiable pour tous.
          </p>
          <p>
            Spécialistes des accessoires et de la tech, nous sélectionnons chaque produit 
            pour sa qualité et son design. Notre mission est de vous accompagner dans 
            votre transformation numérique avec style.
          </p>
          
          <div className="stats">
            <div className="stat-box">
              <h3>3+</h3>
              <p>Ans d'expérience</p>
            </div>
            <div className="stat-box">
              <h3>100%</h3>
              <p>Clients Satisfaits</p>
            </div>
            <div className="stat-box">
              <h3>24h</h3>
              <p>Livraison Rapide</p>
            </div>
          </div>

          <Link to="/contact" className="btn">Travailler avec nous</Link>
        </div>

        {/* Image illustrative (Tu peux mettre une vraie photo plus tard) */}
        <div className="about-image">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Équipe Duval Tech" 
          />
        </div>
      </div>
    </div>
  );
}

export default About;