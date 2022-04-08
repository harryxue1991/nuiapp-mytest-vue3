import { createStore } from "vuex";
import { store as app } from "@/store/app";

import getters from "./getters";

export const store = createStore({
  modules: {
    app,
  },
  getters,
});

export function useStore() {
  return store;
}
