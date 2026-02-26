import { useParams, useNavigate } from 'react-router-dom';

// 1. On reçoit "produits" ET "ajouterAuPanier" depuis App.jsx
function Details({ produits, ajouterAuPanier }) {
  const { id } = useParams();
  const navigate = useNavigate();

  // On cherche le produit dans notre "Source de Vérité"
  const produit = produits.find((p) => p.id === Number(id) || p.id === id);

  if (!produit) {
    return (
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <h2>⚠️ Produit introuvable</h2>
        <button onClick={() => navigate('/boutique')} className="btn-primary">Retour à la boutique</button>
      </div>
    );
  }

  return (
    <div className="details-container" style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
      
      {/* 2. BOUTON RETOUR */}
      <button 
        onClick={() => navigate(-1)} 
        style={{ marginBottom: '20px', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', color: '#64748b' }}
      >
        ⬅️ Retour aux produits
      </button>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
        <div className="details-image">
          <img 
            src={produit.image} 
            alt={produit.title} 
            style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} 
          />
        </div>

        <div className="details-info">
          <span style={{ backgroundColor: '#f1f5f9', padding: '5px 12px', borderRadius: '20px', fontSize: '0.8rem', color: '#475569' }}>
            {produit.category}
          </span>
          
          <h1 style={{ marginTop: '15px' }}>{produit.title}</h1>
          <h2 style={{ color: '#f59e0b', margin: '15px 0' }}>{produit.price.toLocaleString()} FCFA</h2>
          
          <div style={{ padding: '20px 0', borderTop: '1px solid #e2e8f0' }}>
            <h4>Description</h4>
            {/* 3. AFFICHAGE DE LA DESCRIPTION RÉELLE */}
            <p style={{ color: '#64748b', lineHeight: '1.6' }}>
              {produit.description || "Aucune description détaillée n'a été ajoutée pour cet article tech."}
            </p>
          </div>

          <p><strong>Stock :</strong> {produit.stock} unités restantes</p>

          {/* 4. BOUTON PANIER CONNECTÉ */}
          <button 
            onClick={() => ajouterAuPanier(produit)}
            className="btn-primary" 
            style={{ width: '100%', marginTop: '20px', padding: '15px', borderRadius: '8px' }}
          >
            Ajouter au panier 🛒
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;