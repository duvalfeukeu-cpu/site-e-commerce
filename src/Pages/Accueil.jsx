import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { UserContext } from '../context/User'; 

// 1. On reçoit "produits" depuis App.jsx via les destructuration des props
function Accueil({ produits, ajouterAuPanier }) {
  const { user } = useContext(UserContext);

  // NOTE : On n'utilise plus useFetch ici pour l'instant car on veut 
  // afficher NOS produits du Dashboard (Source de Vérité).

  return (
    <div>
      {/* --- HERO SECTION --- */}
      <div className="hero-section">
        {user ? (
          <>
            <h1 className="hero-title">Heureux de vous revoir, {user.name} ! 👋</h1>
            <p className="hero-subtitle">Le stock a été mis à jour par l'admin.</p>
          </>
        ) : (
          <>
            <h1 className="hero-title">Bienvenue chez DUVALSHOP 🚀</h1>
            <p className="hero-subtitle">Le meilleur de la tech en un clic.</p>
            <div className="hero-buttons">
              <Link to="/login" className="btn-primary">Se connecter</Link>
            </div>
          </>
        )}
      </div>

      {/* --- LA GRILLE DE PRODUITS --- */}
      <h2 id="shop" style={{ marginBottom: '20px', textAlign: 'center' }}>
        🔥 Nos Produits en Stock
      </h2>
      
      <div className="product-grid">
        {/* On affiche les produits qui viennent de App.jsx */}
        {produits?.map((produit) => (
          <ProductCard 
            key={produit.id} 
            produit={produit} 
            ajouterAuPanier={ajouterAuPanier} 
          />
        ))}

        {/* Petit message si la liste est vide */}
        {produits?.length === 0 && <p>Aucun produit n'est disponible pour le moment.</p>}
      </div>
    </div>
  );
}

export default Accueil;