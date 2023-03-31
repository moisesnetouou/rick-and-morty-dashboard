import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UseFavoriteStoreProps {
  favorites: number[];
  count: number;
  addFavorites: (id: string) => void;
}

export const useFavoriteStore = create(
  persist<UseFavoriteStoreProps>(
    (set, get) => ({
      favorites: [],
      count: 0,
      addFavorites: (id: string) => {
        const currentFavorites = [...get().favorites];

        currentFavorites.push(Number(id));

        set(() => ({
          count: get().count + 1,
          favorites: currentFavorites,
        }));
      },
    }),
    {
      name: '@favorite',
    },
  ),
);
