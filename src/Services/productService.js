const BASE_URL = "https://fakestoreapi.com";

// Fonction pour avoir tous les produits
export const getAllProducts = async () => {
  const response = await fetch(`${BASE_URL}/products`);
  return await response.json();
};

// Fonction pour avoir UN seul produit
export const getProductById = async (id) => {
  const response = await fetch(`${BASE_URL}/products/${id}`);
  return await response.json();
};