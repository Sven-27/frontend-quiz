import { create } from "zustand";
import { combine, devtools, persist } from "zustand/middleware";

// State for tne theme (dark or light mode).

export const themeStore = create(
  devtools(
    persist(
      combine(
        {
          dark: false as boolean
        },
        (set, get) => ({
            toggleMode: () => set({ dark: !get().dark })
        })
      ),
      {
        name: "theme-storage"
      }
    )
  )
);
