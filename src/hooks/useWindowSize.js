import { useState, useEffect } from 'react';

// Un Hook commence TOUJOURS par "use"
export function useWindowSize() {
  // 1. On crée un état pour stocker la largeur
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    // 2. La fonction qui met à jour la largeur
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // 3. On ajoute un écouteur d'événement sur la fenêtre
    window.addEventListener("resize", handleResize);

    // 4. TRÈS IMPORTANT : Le nettoyage ! 🧹
    // Si on change de page, on doit arrêter d'écouter pour ne pas ralentir le site
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Le tableau vide = On lance ça une seule fois au chargement

  // 5. On retourne juste la valeur qui nous intéresse
  return width;
}