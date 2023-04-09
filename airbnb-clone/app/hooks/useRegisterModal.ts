import { create } from "zustand";

interface RegisterModalStore {
    isOpen: boolean,
    onOpen: () => void;
    onCLose: () => void;
}


const useRegisterModal = create<RegisterModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onCLose: () => set({ isOpen: false }),
}));


export default useRegisterModal;