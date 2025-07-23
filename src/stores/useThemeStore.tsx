import { create } from 'zustand'

interface DarkStore {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

export const useDarkStore = create<DarkStore>((set) => ({
  isDark: false,
  setIsDark: (isDark) => set({ isDark })
}))

export default useDarkStore