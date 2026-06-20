import { create } from 'zustand';

export const useFavoritesStore = create((set) => ({
  favs: JSON.parse(localStorage.getItem('favorites')) || [],

  toggleFavorite: (character) => set((state) => {
    const isAlreadyFav = state.favs.find((f) => f.id === character.id);
    const newFavs = isAlreadyFav 
      ? state.favs.filter((f) => f.id !== character.id) 
      : [...state.favs, character];

    // Persistencia
    localStorage.setItem('favorites', JSON.stringify(newFavs));
    
    // Retornamos el nuevo estado
    return { favs: newFavs };
  }),
}));