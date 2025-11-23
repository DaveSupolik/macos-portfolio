import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { locations } from "@constants";

const DEFAULT_LOCATION = locations.work;

const useLocationStore = create(
  immer((set) => ({
    activateLocation: DEFAULT_LOCATION,

    setActiveLocation: (location = null) =>
      set((state) => {
        state.activateLocation = location;
      }),

    resetActiveLocation: () =>
      set((state) => {
        state.activateLocation = DEFAULT_LOCATION;
      }),
  }))
);

export default useLocationStore;
