import { create } from "zustand";
import { combine, devtools, persist } from "zustand/middleware";

// TODO(@artokun): Replace this with the event emmitter patter we use in the editor
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
