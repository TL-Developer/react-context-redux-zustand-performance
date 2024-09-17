import { create } from "zustand";
import { INITIAL_VALUE } from "./Context";

const useZustandStore = create((set) => ({
  store: INITIAL_VALUE,
  increment: () => set((state) => {
    state.store.count.value += 1;
    return state;
  }),
}));

export default useZustandStore;