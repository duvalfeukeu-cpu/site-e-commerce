import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Accueil from './Pages/Accueil'; // ⚠️ Vérifie si "Pages" ici est aussi en minuscule !
import LandingPage from './pages/LandingPage'; // ✅ Corrigé en "pages" (minuscule)
import Details from './Pages/Details';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Login from './Pages/Login';
import Dashboard from './pages/Admin/Dashboard'; 
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
      <Routes>
        {/* --- 🌐 PARTIE BOUTIQUE --- */}
        <Route path="*" element={
          <div className="app-container">
            <Navbar cartCount={panier.length} />
            <div className="content-wrap">
              <Routes>
                {/* Utilisation du dossier "pages" minuscule ici */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/boutique" element={<Accueil ajouterAuPanier={ajouterAuPanier} />} />
                <Route path="/produit/:id" element={<Details />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </div>
            <Footer />
          </div>
        } />

        {/* --- 🛠️ PARTIE ADMIN --- */}
        <Route path="/admin/*" element={<Dashboard />} />
      </Routes>
    </UserProvider>
  );
}

export default App;