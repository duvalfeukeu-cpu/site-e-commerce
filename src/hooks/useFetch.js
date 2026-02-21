import { useState, useEffect } from 'react';

// Notre hook accepte une URL en paramètre
export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Si pas d'URL, on ne fait rien
    if (!url) return;

    setLoading(true); // 1. On commence le chargement

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erreur réseau');
        }
        return response.json();
      })
      .then((data) => {
        setData(data); // 2. On a reçu les données !
        setLoading(false); // Fini de charger
        setError(null);
      })
      .catch((err) => {
        setError(err.message); // 3. Oups, une erreur
        setLoading(false);
      });
  }, [url]); // Se relance si l'URL change

  // On retourne les 3 états pour que le composant puisse les utiliser
  return { data, loading, error };
}