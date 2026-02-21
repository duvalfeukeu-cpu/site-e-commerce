import { useContext } from 'react'; // 👈 Plus besoin de useState ni useEffect !
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { UserContext } from '../context/User'; 
import { useFetch } from '../hooks/useFetch'; // 👈 1. On importe ton nouveau Hook

function Accueil({ ajouterAuPanier }) {
  // On récupère l'utilisateur pour la bannière
  const { user } = useContext(UserContext);

  // 👇 2. REMPLACEMENT MAGIQUE : Tout le chargement se fait en 1 ligne !
  // On appelle l'API et on renomme "data" en "produits"
  const { data: produits, loading, error } = useFetch('https://fakestoreapi.com/products');

  // 👇 3. On gère l'affichage pendant le chargement (Spinner)
  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <h2>⏳ Chargement de la boutique...</h2>
      </div>
    );
  }

  // 👇 4. On gère l'affichage si l'API plante (Erreur)
  if (error) {
    return (
      <div style={{ textAlign: 'center', marginTop: '100px', color: 'red' }}>
        <h2>⚠️ Oups ! Une erreur est survenue :</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div>
      {/* --- HERO SECTION (Bannière) --- */}
      <div className="hero-section">
        {user ? (
          // CAS 1 : Utilisateur connecté
          <>
            <h1 className="hero-title">Heureux de vous revoir, {user.name} ! 👋</h1>
            <p className="hero-subtitle">Nous avons de nouvelles offres tech rien que pour vous.</p>
            <div className="hero-buttons">
              <a href="#shop" className="btn-primary">Voir les promos</a>
            </div>
          </>
        ) : (
          // CAS 2 : Visiteur
          <>
            <h1 className="hero-title">Bienvenue chez DUVALSHOP 🚀</h1>
            <p className="hero-subtitle">Le meilleur de la tech, livré chez vous en un clic.</p>
            <div className="hero-buttons">
              <Link to="/login" className="btn-primary">Se connecter</Link>
              <Link to="/contact" className="btn-secondary">S'inscrire</Link>
            </div>
          </>
        )}
      </div>

      {/* --- LA GRILLE DE PRODUITS --- */}
      <h2 id="shop" style={{ marginBottom: '20px', textAlign: 'center' }}>
        🔥 Découvrez tous nos Produits
      </h2>
      
      <div className="product-grid">
        {/* On ajoute un "?" après produits par sécurité (produits?.map) */}
        {produits?.map((produit) => (
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