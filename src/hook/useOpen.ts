import { create } from "zustand"


type OpenProps = {
    isOpen: boolean
    setIsOpen: (item: boolean) => void
}


export const useOpen = create<OpenProps>((set) => ({
    isOpen: false,
    setIsOpen: (item: boolean) => set({ isOpen: item })
}))