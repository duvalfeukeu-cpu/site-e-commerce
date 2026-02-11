import { Link } from 'react-router-dom';

function ProductCard({ produit }) {
  return (
    <div className="card">
      <img src={produit.image} alt={produit.title} />
      <h3>{produit.title}</h3>
      <p className="price">{produit.price} €</p>
      <Link to={`/produit/${produit.id}`} className="btn">
        Voir détails
      </Link>
    </div>
  );
}
export default ProductCard;