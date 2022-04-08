import { useStore } from "vuex";

export const useMapState = (getKeys) => {
  const store = useStore();
  return store.getters[getKeys];
};
