import { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // 1. On crée un état pour savoir quelle page afficher
  const [page, setPage] = useState('dashboard');

  return (
    <div className="admin-container">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="logo-section">
          <h1>DUVALSHOP</h1>
          <span>GESTION BOUTIQUE</span>
        </div>
        
        <nav className="nav-menu">
          {/* On utilise des boutons pour changer la page */}
          <button 
            onClick={() => setPage('dashboard')} 
            className={`nav-item ${page === 'dashboard' ? 'active' : ''}`}
          >
            📊 Tableau de bord
          </button>
          
          <button 
            onClick={() => setPage('inventaire')} 
            className={`nav-item ${page === 'inventaire' ? 'active' : ''}`}
          >
            📦 Inventaire
          </button>
          
          <button 
            onClick={() => setPage('commandes')} 
            className={`nav-item ${page === 'commandes' ? 'active' : ''}`}
          >
            🚚 Commandes
          </button>
          
          <button 
            onClick={() => setPage('clients')} 
            className={`nav-item ${page === 'clients' ? 'active' : ''}`}
          >
            👤 Clients
          </button>
        </nav>

        {/* 2. BOUTON RETOUR (En bas de la sidebar) */}
        <div style={{ padding: '20px', borderTop: '1px solid #1e293b' }}>
          <Link to="/" className="btn-report" style={{ textDecoration: 'none', display: 'block', textAlign: 'center', backgroundColor: '#334155', color: 'white', border: 'none' }}>
            🏠 Retour Boutique
          </Link>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main-content">
        
        {/* AFFICHAGE DU TABLEAU DE BORD (STATS) */}
        {page === 'dashboard' && (
          <>
            <header className="top-header">
              <h2>Vue d'ensemble</h2>
              <button className="btn-report">Télécharger rapport</button>
            </header>

            <div className="stats-grid">
              <div className="card"><p>VENTES TOTALES</p><h3>2 450 000 F</h3></div>
              <div className="card"><p>VISITEURS</p><h3>12 543</h3></div>
              <div className="card"><p>COMMANDES</p><h3>86</h3></div>
              <div className="card"><p>ALERTES STOCK</p><h3 className="text-danger">04</h3></div>
            </div>
          </>
        )}

        {/* AFFICHAGE DE L'INVENTAIRE */}
        {page === 'inventaire' && (
          <section>
            <header className="top-header">
              <h2>Gestion de l'Inventaire</h2>
              <button className="btn-report" style={{backgroundColor: '#f59e0b', color: 'white'}}>+ Ajouter Produit</button>
            </header>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Produit</th>
                  <th>Prix</th>
                  <th>Stock</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>iPhone 15 Pro</td>
                  <td>850 000 F</td>
                  <td>12</td>
                  <td>✏️ 🗑️</td>
                </tr>
              </tbody>
            </table>
          </section>
        )}

        {/* AFFICHAGE DES CLIENTS */}
        {page === 'clients' && (
          <section>
            <header className="top-header">
              <h2>Liste des Clients</h2>
            </header>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Email</th>
                  <th>Dernier Achat</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Duval Feukeu</td>
                  <td>duval@example.cm</td>
                  <td>Il y a 2 jours</td>
                </tr>
              </tbody>
            </table>
          </section>
        )}

        {/* PAGE VIDE POUR LES COMMANDES (À remplir plus tard) */}
        {page === 'commandes' && <h2>Gestion des Commandes (Bientôt disponible)</h2>}

      </main>
    </div>
  );
};

export default Dashboard;