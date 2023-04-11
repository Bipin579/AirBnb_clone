import { create } from "zustand";

interface LoginModalStore {
    isOpen: boolean,
    onOpen: () => void;
    onCLose: () => void;
}


const useLoginModal = create<LoginModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onCLose: () => set({ isOpen: false }),
}));


export default useLoginModal;