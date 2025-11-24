import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { locations } from "@constants";

const DEFAULT_LOCATION = locations.work;

const useLocationStore = create(
  immer((set) => ({
    activeLocation: DEFAULT_LOCATION,

    setActiveLocation: (location) =>
      set((state) => {
        if (location === undefined) {
          return state;
        }
        state.activeLocation = location === null ? DEFAULT_LOCATION : location;
      }),

    resetActiveLocation: () =>
      set((state) => {
        state.activeLocation = DEFAULT_LOCATION;
      }),
  }))
);

export default useLocationStore;
