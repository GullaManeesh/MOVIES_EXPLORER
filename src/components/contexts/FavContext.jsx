import { createContext, useContext, useState, useEffect } from "react";

const FavContext = createContext();

export const FavContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem("Favorites");
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Failed to load favorites", error);
      return [];
    }
  });

  // Save to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem("Favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFav = (fav) => {
    setFavorites((prev) => {
      const exists = prev.some(
        (m) => (m.id || m.imdbID) === (fav.id || fav.imdbID)
      );
      return exists ? prev : [...prev, fav];
    });
  };

  const removeFromFav = (id) => {
    setFavorites((prev) => prev.filter((m) => (m.id || m.imdbID) !== id));
  };

  return (
    <FavContext.Provider value={{ favorites, addToFav, removeFromFav }}>
      {children}
    </FavContext.Provider>
  );
};

export const useFavContext = () => {
  return useContext(FavContext);
};
