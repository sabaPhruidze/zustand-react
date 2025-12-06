import { create } from "zustand";

interface StoreCart {
  cartCount:number;
  increase: () => void;
  reset:() => void;
}

export const useCartStore = create<StoreCart>((set) => ({
  cartCount: 0,
  increase: () => set((state) => ({ cartCount: state.cartCount + 1 })),
  reset:() => set({ cartCount: 0 }),
}));
