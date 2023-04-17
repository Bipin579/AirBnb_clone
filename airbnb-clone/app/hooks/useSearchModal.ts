import { create } from "zustand";

interface SearchModalStore {
    isOpen: boolean,
    onOpen: () => void;
    onCLose: () => void;
}


const useSearchModal = create<SearchModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onCLose: () => set({ isOpen: false }),
}));


export default useSearchModal;