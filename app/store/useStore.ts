import { create } from "zustand"

interface storeState {
    isOpen: boolean;
    open: () => void;
    close: () => void; 
}

export const openModal = create<storeState>((set)=>({
    isOpen: false,
    open: () => set({isOpen: true}),
    close: ()=> set ({isOpen: false})
}))