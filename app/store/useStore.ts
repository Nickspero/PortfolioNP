import { create } from "zustand";

interface modalState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

interface darkModeState {
  dark: boolean;
  toggleDark: () => void;
}

export const openModal = create<modalState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export const darkMode = create<darkModeState>((set) => ({
  dark: false,
  toggleDark: () => set((state) => ({ dark: !state.dark })),
}));
