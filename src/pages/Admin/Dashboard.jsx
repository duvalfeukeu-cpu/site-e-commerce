import { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({ produits, setProduits }) => {
  const [page, setPage] = useState('dashboard');
  const [showForm, setShowForm] = useState(false);
  
  const [nouveauProduit, setNouveauProduit] = useState({
    title: '',
    price: '',
    stock: '',
    image: '', 
    category: 'Tech'
  });

const handleAjouter = (e) => {
  e.preventDefault();
  
  // Cette ligne prend ton lien, et s'il est vide ou trop court, 
  // elle met une image de tech au hasard
  const imageValide = nouveauProduit.image.length > 10 
    ? nouveauProduit.image 
    : `https://loremflickr.com/400/400/technology?lock=${Date.now()}`;

  const produitFinal = {
    ...nouveauProduit,
    id: Date.now(),
    price: Number(nouveauProduit.price),
    stock: Number(nouveauProduit.stock),
    image: imageValide
  };

  setProduits([...produits, produitFinal]);
  setNouveauProduit({ title: '', price: '', stock: '', image: '', category: 'Tech' });
  setShowForm(false);
};

  const supprimerProduit = (id) => {
    if(window.confirm("Voulez-vous vraiment supprimer ce produit ?")) {
      const nouvelleListe = produits.filter(p => p.id !== id);
      setProduits(nouvelleListe);
    }
  };

  return (
    <div className="admin-container">
      <aside className="sidebar">
        <div className="logo-section">
          <h1>DUVALSHOP</h1>
          <span>GESTION ADMIN</span>
        </div>
        <nav className="nav-menu">
          <button onClick={() => setPage('dashboard')} className={`nav-item ${page === 'dashboard' ? 'active' : ''}`}>📊 Tableau de bord</button>
          <button onClick={() => setPage('inventaire')} className={`nav-item ${page === 'inventaire' ? 'active' : ''}`}>📦 Inventaire</button>
          <button onClick={() => setPage('commandes')} className={`nav-item ${page === 'commandes' ? 'active' : ''}`}>🚚 Commandes</button>
          <button onClick={() => setPage('clients')} className={`nav-item ${page === 'clients' ? 'active' : ''}`}>👤 Clients</button>
        </nav>
        <div style={{ padding: '20px', borderTop: '1px solid #1e293b' }}>
          <Link to="/" className="btn-report" style={{ textDecoration: 'none', display: 'block', textAlign: 'center', backgroundColor: '#334155', color: 'white' }}>🏠 Retour Boutique</Link>
        </div>
      </aside>

      <main className="main-content">
        {page === 'dashboard' && (
          <>
            <header className="top-header"><h2>Vue d'ensemble</h2></header>
            <div className="stats-grid">
              <div className="card"><p>PRODUITS ACTIFS</p><h3>{produits.length}</h3></div>
              <div className="card"><p>VALEUR STOCK</p><h3>{produits.reduce((acc, p) => acc + (p.price * p.stock), 0).toLocaleString()} F</h3></div>
            </div>
          </>
        )}

        {page === 'inventaire' && (
          <section>
            <header className="top-header">
              <h2>Gestion de l'Inventaire</h2>
              <button className="btn-report" style={{backgroundColor: showForm ? '#ef4444' : '#f59e0b', color: 'white'}} onClick={() => setShowForm(!showForm)}>
                {showForm ? '✖ Annuler' : '+ Ajouter un Produit'}
              </button>
            </header>

            {showForm && (
              <form onSubmit={handleAjouter} className="card" style={{marginBottom: '30px', padding: '20px', border: '1px solid #334155'}}>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px'}}>
                  <div>
                    <label>Nom du produit</label>
                    <input required className="admin-input" type="text" value={nouveauProduit.title} onChange={(e) => setNouveauProduit({...nouveauProduit, title: e.target.value})} />
                  </div>
                  <div>
                    <label>Prix (FCFA)</label>
                    <input required className="admin-input" type="number" value={nouveauProduit.price} onChange={(e) => setNouveauProduit({...nouveauProduit, price: e.target.value})} />
                  </div>
                  <div>
                    <label>Stock</label>
                    <input required className="admin-input" type="number" value={nouveauProduit.stock} onChange={(e) => setNouveauProduit({...nouveauProduit, stock: e.target.value})} />
                  </div>
                  <div>
                    <label>Lien Image (URL direct .jpg ou .png)</label>
                    <input className="admin-input" type="text" value={nouveauProduit.image} onChange={(e) => setNouveauProduit({...nouveauProduit, image: e.target.value})} placeholder="https://image.com/photo.jpg" />
                    {/* PETIT APERÇU POUR TESTER LE LIEN */}
                    {nouveauProduit.image && <img src={nouveauProduit.image} alt="Aperçu" style={{width: '50px', marginTop: '10px', borderRadius: '5px'}} onError={(e) => e.target.src='https://via.placeholder.com/50?text=Erreur'} />}
                  </div>
                </div>
                <button type="submit" className="btn-primary" style={{marginTop: '15px', width: '100%'}}>Enregistrer le produit</button>
              </form>
            )}

            <table className="admin-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Produit</th>
                  <th>Prix</th>
                  <th>Stock</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {produits.map((p) => (
                  <tr key={p.id}>
                    {/* On utilise une div avec background-image ou une balise img propre */}
                    <td>
                      <img 
                        src={p.image} 
                        alt={p.title} 
                        style={{width: '50px', height: '50px', objectFit: 'cover', borderRadius: '4px', border: '1px solid #ddd'}} 
                        onError={(e) => { e.target.onerror = null; e.target.src="https://via.placeholder.com/50?text=No+Img" }} 
                      />
                    </td>
                    <td>{p.title}</td>
                    <td>{p.price.toLocaleString()} F</td>
                    <td>{p.stock}</td>
                    <td>
                      <button onClick={() => supprimerProduit(p.id)} style={{background:'none', border:'none', cursor:'pointer'}}>🗑️</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}
      </main>
    </div>
  );
};

export default Dashboard;