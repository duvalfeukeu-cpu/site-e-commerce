import { createContext, useState } from 'react';

// 1. On crée la "fréquence radio" (Le Contexte)
export const UserContext = createContext();

// 2. On crée l'antenne (Le Provider) qui va envelopper l'application
export const UserProvider = ({ children }) => {
  // Ici, on stocke l'état : Est-ce qu'on a un utilisateur ?
  const [user, setUser] = useState(null); // null = personne n'est connecté

  // Fonction pour se connecter (simulée)
  const login = (name) => {
    setUser({ name: name });
  };

  // Fonction pour se déconnecter
  const logout = () => {
    setUser(null);
  };

  return (
    // On diffuse les infos (user, login, logout) à tous les enfants
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};