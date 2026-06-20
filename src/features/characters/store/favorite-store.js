import { create } from 'zustand';

export const useFavoritesStore = create((set) => ({
  favs: JSON.parse(localStorage.getItem('favorites')) || [],
  favPage: 1,

  setFavPage: (newPage) => set({ favPage: newPage }),
  
  toggleFavorite: (character) => set((state) => {
    const isAlreadyFav = state.favs.find((f) => f.id === character.id);
    const newFavs = isAlreadyFav 
      ? state.favs.filter((f) => f.id !== character.id) 
      : [...state.favs, character];

  
    localStorage.setItem('favorites', JSON.stringify(newFavs));
    

    return { favs: newFavs };
  }),
}));