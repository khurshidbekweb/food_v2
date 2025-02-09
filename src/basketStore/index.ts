import { create } from "zustand";
import { persist } from "zustand/middleware";

type Product = {
  _id: string;
  name: { uz: string; en: string; ru: string };
  price: number;
  image: string;
  count: number;
};

type CartState = {
  items: Product[];
  totalPrice: number;
  addToCart: (product: Omit<Product, "count">) => void;
  removeFromCart: (_id: string) => void;
  increaseCount: (_id: string) => void;
  decreaseCount: (_id: string) => void;
  getCount: (_id: string) => number;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      totalPrice: 0,
      addToCart: (product) =>
        set((state) => {
          const existingItem = state.items.find((item) => item._id === product._id);
          let updatedItems;
          if (existingItem) {
            updatedItems = state.items.map((item) =>
              item._id === product._id ? { ...item, count: item.count + 1 } : item
            );
          } else {
            updatedItems = [...state.items, { ...product, count: 1 }];
          }
          return {
            items: updatedItems,
            totalPrice: updatedItems.reduce((sum, item) => sum + item.price * item.count, 0),
          };
        }),
      removeFromCart: (_id) =>
        set((state) => {
          const updatedItems = state.items.filter((item) => item._id !== _id);
          return {
            items: updatedItems,
            totalPrice: updatedItems.reduce((sum, item) => sum + item.price * item.count, 0),
          };
        }),
      increaseCount: (_id) =>
        set((state) => {
          const updatedItems = state.items.map((item) =>
            item._id === _id ? { ...item, count: item.count + 1 } : item
          );
          return {
            items: updatedItems,
            totalPrice: updatedItems.reduce((sum, item) => sum + item.price * item.count, 0),
          };
        }),
      decreaseCount: (_id) =>
        set((state) => {
          const updatedItems = state.items
            .map((item) => (item._id === _id && item.count > 1 ? { ...item, count: item.count - 1 } : item))
            .filter((item) => item.count > 0);
          return {
            items: updatedItems,
            totalPrice: updatedItems.reduce((sum, item) => sum + item.price * item.count, 0),
          };
        }),
      getCount: (_id) => {
        const item = get().items.find((item) => item._id === _id);
        return item ? item.count : 0;
      },
    }),
    { name: "cart-storage" }
  )
);
