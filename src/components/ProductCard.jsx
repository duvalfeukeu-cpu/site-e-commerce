import { Link } from 'react-router-dom';

// 👇 1. On récupère la fonction et le produit
function ProductCard({ produit, ajouterAuPanier }) {
  return (
    <div className="card">
      <img src={produit.image} alt={produit.title} />
      <h3>{produit.title}</h3>
      <p className="price">{produit.price} €</p>
      
      <div className="card-actions">
        <Link to={`/produit/${produit.id}`} className="btn">
          Voir détails
        </Link>
        
        {/* 👇 2. Le nouveau bouton qui déclenche l'ajout */}
        <button 
          className="btn" 
          style={{ backgroundColor: '#febd69', color: 'black', marginLeft: '10px' }}
          onClick={() => ajouterAuPanier(produit)}
        >
          Ajouter +
        </button>
      </div>
    </div>
  );
}
export default ProductCard;