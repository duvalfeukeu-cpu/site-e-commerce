import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function Details() {
  const { id } = useParams();
  const [produit, setProduit] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduit(data));
  }, [id]);

  if (!produit) return <h2 style={{textAlign: 'center', marginTop: 50}}>⏳ Chargement...</h2>;

  return (
    <div className="details-container">
      <img src={produit.image} alt={produit.title} className="details-img" />
      
      <div className="details-info">
        <h1>{produit.title}</h1>
        <p className="category">{produit.category}</p>
        <p className="description">{produit.description}</p>
        <p className="price">{produit.price} €</p>
        
        <button className="btn" style={{ marginRight: 10 }}>Ajouter au panier</button>
        <Link to="/" style={{ textDecoration: 'underline' }}>Retour</Link>
      </div>
    </div>
  );
}
export default Details;