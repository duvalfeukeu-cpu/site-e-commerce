import { useState } from 'react';

function Contact() {
  // Petit bonus : Gérer l'envoi du formulaire (juste visuel pour l'instant)
  const [envoye, setEnvoye] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche la page de se recharger
    setEnvoye(true);    // Affiche le message de succès
  };

  return (
    <div className="contact-container">
      
      {/* PARTIE GAUCHE : LE FORMULAIRE */}
      <div className="contact-form">
        <h1>✉️ Contactez-nous</h1>
        <p>Une question sur un produit ? Besoin d'aide ?</p>

        {envoye ? (
          <div className="success-message">
            <h3>✅ Message envoyé !</h3>
            <p>Nous vous répondrons sous 24h.</p>
            <button onClick={() => setEnvoye(false)} className="btn">Envoyer un autre</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>Votre Nom</label>
            <input type="text" placeholder="Ex: Duval Feukeu" required />

            <label>Votre Email</label>
            <input type="email" placeholder="email@exemple.com" required />

            <label>Votre Message</label>
            <textarea rows="5" placeholder="Bonjour, je voudrais savoir..." required></textarea>

            <button type="submit" className="btn">Envoyer le message</button>
          </form>
        )}
      </div>

      {/* PARTIE DROITE : LES COORDONNÉES */}
      <div className="contact-info">
        <h2>📍 Nos Coordonnées</h2>
        <div className="info-item">
          <h3>🏢 Adresse</h3>
          <p>Immeuble duvalShop, Akwa</p>
          <p>Douala, Cameroun</p>
        </div>

        <div className="info-item">
          <h3>📞 Téléphone</h3>
          <p>+237 650 69 26 50</p>
          <p>Lundi - Vendredi : 8h - 18h</p>
        </div>

        <div className="info-item">
          <h3>📧 Email</h3>
          <p>service-client@duvalShop.cm</p>
        </div>
      </div>

    </div>
  );
}

export default Contact;