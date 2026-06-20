import { create } from 'zustand';

export const useFilterStore = create((set) => ({
    name: "",
    gender: "",
    status: "",
    page: 1, 

    maxPages: 1, 
    setMaxPages: (max) => set({ maxPages: max }),

    setName: (name) => set({ name, page: 1 }), // Reset a 1 al buscar
    setGender: (gender) => set({ gender, page: 1 }),
    setStatus: (status) => set({ status, page: 1 }),
    setPage: (page) => set({ page }),
    nextPage: () => set((state) => ({ page: state.page + 1 })),
    prevPage: () => set((state) => ({ page: Math.max(state.page - 1, 1) })),
}));