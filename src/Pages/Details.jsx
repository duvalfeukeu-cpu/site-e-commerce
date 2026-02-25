import { useParams, useNavigate } from 'react-router-dom';

// 1. On récupère la liste des produits via les Props
function Details({ produits }) {
  const { id } = useParams(); // On récupère l'ID qui est dans l'URL
  const navigate = useNavigate();

  // 2. On cherche le produit correspondant dans notre liste "Source de Vérité"
  // On utilise Number(id) car l'ID dans l'URL est souvent une chaîne de caractères
  const produit = produits.find((p) => p.id === Number(id) || p.id === id);

  // 3. Si le produit n'est pas trouvé (ex: id inexistant)
  if (!produit) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>⚠️ Produit introuvable</h2>
        <button onClick={() => navigate('/boutique')} className="btn-primary">
          Retour à la boutique
        </button>
      </div>
    );
  }

  return (
    <div className="details-container" style={{ padding: '40px', display: 'flex', gap: '40px' }}>
      <div className="details-image">
        <img src={produit.image} alt={produit.title} style={{ width: '100%', maxWidth: '400px', borderRadius: '8px' }} />
      </div>

      <div className="details-info">
        <h1>{produit.title}</h1>
        <p className="category" style={{ color: '#64748b', textTransform: 'uppercase' }}>{produit.category}</p>
        <h2 style={{ color: '#f59e0b' }}>{produit.price.toLocaleString()} FCFA</h2>
        
        <div style={{ margin: '20px 0', padding: '15px', background: '#f8fafc', borderRadius: '8px' }}>
          <p><strong>État du stock :</strong> {produit.stock > 0 ? `${produit.stock} unités disponibles` : 'Rupture de stock'}</p>
        </div>

        <p className="description">
          {produit.description || "Aucune description disponible pour ce produit technologique."}
        </p>

        <button className="btn-primary" style={{ marginTop: '20px', padding: '12px 30px' }}>
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}

export default Details;