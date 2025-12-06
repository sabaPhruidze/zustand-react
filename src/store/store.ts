import {create} from 'zustand';

interface ThemeStore {
    theme: 'light' | 'dark';
    toggleTheme:() => void;
}

export const useThemeStore = create<ThemeStore>(set => ({
    theme:'light',
    toggleTheme:() => set((state) => ({theme: Object.is(state.theme,'light') ? 'dark' : 'light'}))
}))