import { create } from "zustand";

interface RentModalStore {
    isOpen: boolean,
    onOpen: () => void;
    onCLose: () => void;
}


const useRentModal = create<RentModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onCLose: () => set({ isOpen: false }),
}));


export default useRentModal;