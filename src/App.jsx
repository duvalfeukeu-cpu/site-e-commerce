import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Accueil from './Pages/Accueil';
import LandingPage from './pages/Landing'; // 👈 1. IMPORT IMPORTANT
import Details from './Pages/Details';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Login from './Pages/Login';
import { UserProvider } from './context/User'; 
import './App.css';

function App() {
  const [panier, setPanier] = useState([]);

  const ajouterAuPanier = (produit) => {
    const nouveauPanier = [...panier, produit];
    setPanier(nouveauPanier);
    alert(`Bravo ! ${produit.title} a été ajouté au panier 🛒`);
  };

  return (
    <UserProvider>
      <div className="app-container">
        <Navbar cartCount={panier.length} />

        <div className="content-wrap">
          <Routes>
            {/* 👇 2. CHANGEMENT : La racine "/" affiche maintenant la LandingPage */}
            <Route path="/" element={<LandingPage />} />

            {/* 👇 3. NOUVEAU : "/boutique" affiche les produits (Ton ancien Accueil) */}
            <Route path="/boutique" element={<Accueil ajouterAuPanier={ajouterAuPanier} />} />
            
            <Route path="/produit/:id" element={<Details />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;