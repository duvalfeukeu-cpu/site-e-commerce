import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Accueil from './Pages/Accueil';
import Details from './Pages/Details';
import Contact from './Pages/Contact'; // 👈 Ajoute ça
import About from './Pages/About';
import Login from './Pages/Login'; // 👈 Impor
// Tu peux créer une page Panier vide aussi si tu veux éviter l'erreur 
import './App.css'; // Import du CSS

function App() {
  return (
    <div className="app-container">
      <Navbar />

      {/* La div magique qui centre tout */}
      <div className="content-wrap">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/produit/:id" element={<Details />} />

          {/* 👇 La nouvelle route Contact */}
          <Route path="/contact" element={<Contact />} />
          {/* ... tes autres routes ... */}
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;