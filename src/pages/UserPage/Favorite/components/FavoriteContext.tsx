import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface Venue {
  id: number;
  name: string;
  location: string;
  rating: number;
  capacity: number;
  image: string;
}

interface FavoriteContextType {
  favorites: Venue[];
  toggleFavorite: (venue: Venue) => void;
}

const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);

export const FavoriteProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<Venue[]>(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (venue: Venue) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some((fav) => fav.id === venue.id);
      if (isFavorite) {
        return prevFavorites.filter((fav) => fav.id !== venue.id);
      } else {
        return [...prevFavorites, venue];
      }
    });
  };

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorite = () => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error("useFavorite must be used within a FavoriteProvider");
  }
  return context;
};
