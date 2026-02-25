import { useState, useEffect } from 'react'; // 👈 On ajoute useEffect
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import LandingPage from './pages/LandingPage';
import Details from './pages/Details';
import Contact from './pages/Contact'; 
import About from './pages/About';
import Login from './pages/Login';
import Panier from './pages/Panier';
import Dashboard from './pages/Admin/Dashboard';

import { UserProvider } from './context/User';
import './App.css';

function App() {
  // --- 1. CHARGEMENT INITIAL (Lire la mémoire) ---
  const [produits, setProduits] = useState(() => {
    const localData = localStorage.getItem('duval_shop_stocks');
    return localData ? JSON.parse(localData) : [
      { id: 1, title: "iPhone 15 Pro", price: 850000, stock: 12, category: "Téléphones", image: "https://picsum.photos/400" },
      { id: 2, title: "AirPods Pro 2", price: 150000, stock: 5, category: "Accessoires", image: "https://picsum.photos/401" }
    ];
  });

  const [panier, setPanier] = useState(() => {
    const localCart = localStorage.getItem('duval_shop_cart');
    return localCart ? JSON.parse(localCart) : [];
  });

  // --- 2. SAUVEGARDE AUTOMATIQUE (Écrire dans la mémoire) ---
  useEffect(() => {
    localStorage.setItem('duval_shop_stocks', JSON.stringify(produits));
  }, [produits]); // S'exécute dès que la liste de produits change

  useEffect(() => {
    localStorage.setItem('duval_shop_cart', JSON.stringify(panier));
  }, [panier]); // S'exécute dès que le panier change

  // --- 3. FONCTIONS ---
  const ajouterAuPanier = (produit) => {
    setPanier([...panier, produit]);
    alert(`Bravo ! ${produit.title} est dans ton panier 🛒`);
  };

  const modifierProduit = (nouvelleListe) => {
    setProduits(nouvelleListe);
  };

  return (
    <UserProvider>
      <Routes>
        {/* --- 🌐 PARTIE BOUTIQUE --- */}
        <Route path="*" element={
          <div className="app-container">
            <Navbar cartCount={panier.length} />
            <div className="content-wrap">
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/boutique" element={<Accueil produits={produits} ajouterAuPanier={ajouterAuPanier} />} />
                <Route path="/produit/:id" element={<Details produits={produits} />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/panier" element={<Panier panier={panier} setPanier={setPanier} />} />
              </Routes>
            </div>
            <Footer />
          </div>
        } />

        {/* --- 🛠️ PARTIE ADMIN --- */}
        <Route path="/admin/*" element={<Dashboard produits={produits} setProduits={modifierProduit} />} />
      </Routes>
    </UserProvider>
  );
}

export default App;