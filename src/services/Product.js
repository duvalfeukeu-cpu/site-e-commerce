const BASE_URL = "https://fakestoreapi.com";

// On garde uniquement "getProducts" car c'est ce que Accueil.jsx utilise
export const getProducts = async () => {
  const response = await fetch(`${BASE_URL}/products`);
  return await response.json();
};

// Fonction pour avoir UN seul produit (utile pour la page Détails)
export const getProductById = async (id) => {
  const response = await fetch(`${BASE_URL}/products/${id}`);
  return await response.json();
};