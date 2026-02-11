import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
// 👇 1. On importe notre nouveau "Cuisinier"
import { getProducts } from '../Services/productService'; 

function Accueil() {
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    // 👇 2. Regarde comme c'est propre ! 
    // On ne voit plus d'URL bizarre ici. On demande juste les produits.
    getProducts().then(data => setProduits(data));
  }, []);

  return (
    <div>
      {/* Ton titre personnalisé */}
      <h1 style={{ marginBottom: '20px', textAlign: 'center' }}>
        🔥 Decouvre tout nos Produits
      </h1>
      
      {/* Ta grille de produits */}
      <div className="product-grid">
        {produits.map((produit) => (
          <ProductCard key={produit.id} produit={produit} />
        ))}
      </div>
    </div>
  );
}

export default Accueil;