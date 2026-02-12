import { useEffect, useState, useContext } from 'react'; // 👈 Ajout de useContext
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../services/Product'; 
import { UserContext } from '../context/User'; // 👈 Import du contexte

function Accueil({ ajouterAuPanier }) {
  const [produits, setProduits] = useState([]);
  
  // 👇 On récupère l'utilisateur connecté depuis la "Radio"
  const { user } = useContext(UserContext);

  useEffect(() => {
    getProducts().then(data => setProduits(data));
  }, []);

  return (
    <div>
      
      {/* --- HERO SECTION (Bannière) --- */}
      <div className="hero-section">
        {user ? (
          // CAS 1 : L'utilisateur est connecté (ex: Duval)
          <>
            <h1 className="hero-title">Heureux de vous revoir, {user.name} ! 👋</h1>
            <p className="hero-subtitle">Nous avons de nouvelles offres tech rien que pour vous.</p>
            <div className="hero-buttons">
              <a href="#shop" className="btn-primary">Voir les promos</a>
            </div>
          </>
        ) : (
          // CAS 2 : L'utilisateur n'est pas connecté (Visiteur)
          <>
            <h1 className="hero-title">Bienvenue chez DUVALSHOP 🚀</h1>
            <p className="hero-subtitle">Le meilleur de la tech, livré chez vous en un clic.</p>
            <div className="hero-buttons">
              <Link to="/login" className="btn-primary">Se connecter</Link>
              {/* Pour l'instant, S'inscrire mène aussi au Login, on changera ça plus tard */}
              <Link to="/login" className="btn-secondary">S'inscrire</Link>
            </div>
          </>
        )}
      </div>

      {/* --- LA GRILLE DE PRODUITS --- */}
      <h2 id="shop" style={{ marginBottom: '20px', textAlign: 'center' }}>
        🔥 Découvrez tous nos Produits
      </h2>
      
      <div className="product-grid">
        {produits.map((produit) => (
          <ProductCard 
            key={produit.id} 
            produit={produit} 
            ajouterAuPanier={ajouterAuPanier} 
          />
        ))}
      </div>
    </div>
  );
}

export default Accueil;