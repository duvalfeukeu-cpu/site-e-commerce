import { useState } from 'react'; // 👈 1. Import useState
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Accueil from './Pages/Accueil';
import Details from './Pages/Details';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Login from './Pages/Login';
import './App.css';

function App() {
  // 👇 2. On crée l'état du panier ici (au sommet de l'application)
  const [panier, setPanier] = useState([]);

  // 👇 3. La fonction qui ajoute un produit au tableau
  const ajouterAuPanier = (produit) => {
    const nouveauPanier = [...panier, produit];
    setPanier(nouveauPanier);
    alert(`Bravo ! ${produit.title} a été ajouté au panier 🛒`);
  };

  return (
    <div className="app-container">
      {/* 👇 4. On donne la longueur du panier à la Navbar */}
      <Navbar cartCount={panier.length} />

      <div className="content-wrap">
        <Routes>
          {/* 👇 5. On passe la fonction "ajouter" à la page Accueil */}
          <Route path="/" element={<Accueil ajouterAuPanier={ajouterAuPanier} />} />
          
          <Route path="/produit/:id" element={<Details />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;