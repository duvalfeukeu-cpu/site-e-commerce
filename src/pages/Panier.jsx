import { Link } from 'react-router-dom';

function Panier({ panier, setPanier }) {
  // 1. Calcul du prix total
  const total = panier.reduce((acc, produit) => acc + produit.price, 0);

  // 2. Fonction pour générer le lien WhatsApp et envoyer la commande
  const passerCommandeWhatsApp = () => {
    const monNumero = "2376XXXXXXXX"; // 👈 REMPLACE PAR TON NUMÉRO (ex: 237699001122)
    
    // On crée la liste des articles avec un tiret devant chaque nom
    const listeArticles = panier.map(p => `- ${p.title} (${p.price.toLocaleString()} F)`).join('%0A');
    
    // On prépare le message final bien formaté
    const message = `Bonjour DUVALSHOP ! 👋%0A%0AJe souhaite commander les articles suivants :%0A${listeArticles}%0A%0A*Total : ${total.toLocaleString()} FCFA*%0A%0APouvez-vous me confirmer la disponibilité ?`;

    const url = `https://wa.me/${monNumero}?text=${message}`;
    window.open(url, '_blank'); // Ouvre WhatsApp dans un nouvel onglet
  };

  // Fonction pour retirer un produit du panier
  const retirerDuPanier = (index) => {
    const nouveauPanier = panier.filter((_, i) => i !== index);
    setPanier(nouveauPanier);
  };

  return (
    <div className="panier-container" style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Mon Panier 🛒</h1>

      {panier.length === 0 ? (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <p>Votre panier est vide pour le moment.</p>
          <Link to="/boutique" className="btn-primary">Retourner à la boutique</Link>
        </div>
      ) : (
        <>
          <div className="panier-liste">
            {panier.map((produit, index) => (
              <div key={index} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', padding: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <img src={produit.image} alt={produit.title} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '5px' }} />
                  <div>
                    <h4 style={{ margin: 0 }}>{produit.title}</h4>
                    <p style={{ color: '#f59e0b', fontWeight: 'bold', margin: '5px 0 0 0' }}>{produit.price.toLocaleString()} F</p>
                  </div>
                </div>
                <button 
                  onClick={() => retirerDuPanier(index)} 
                  style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem', color: '#ef4444' }}
                  title="Supprimer"
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>

          <div className="panier-resume" style={{ marginTop: '30px', borderTop: '2px solid #e2e8f0', paddingTop: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: 'bold' }}>
              <span>Total estimé :</span>
              <span style={{ color: '#f59e0b' }}>{total.toLocaleString()} FCFA</span>
            </div>
            
            <p style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '10px' }}>
              ℹ️ La commande sera finalisée avec Duval sur WhatsApp.
            </p>

            <button 
              onClick={passerCommandeWhatsApp}
              className="btn-primary" 
              style={{ 
                width: '100%', 
                marginTop: '10px', 
                padding: '15px', 
                fontSize: '1.1rem', 
                backgroundColor: '#25D366', // Couleur officielle WhatsApp
                border: 'none',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <span>Passer la commande sur WhatsApp</span> 📱
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Panier;