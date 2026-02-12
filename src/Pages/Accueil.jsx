import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../Services/productService'; 
// (Assure-toi que le dossier s'appelle bien "services" en minuscule maintenant 😉)

// 👇 1. On récupère la fonction en prop
function Accueil({ ajouterAuPanier }) {
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    getProducts().then(data => setProduits(data));
  }, []);

  return (
    <div>
      <h1 style={{ marginBottom: '20px', textAlign: 'center' }}>
        🔥 Decouvre tout nos Produits
      </h1>
      
      <div className="product-grid">
        {produits.map((produit) => (
          // 👇 2. On la transmet (Drilling) au composant enfant
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