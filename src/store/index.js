import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import config from "../config";
import storage from "../services/storage";

let store = (set) => ({
  user: null,
  isAuthenticated: false,
  breadcrumbs: [],
  setUser: (user) => set((state) => ({ ...state, user })),
  setAuth: (isAuthenticated) => set((state) => ({ ...state, isAuthenticated })),
  setBreadcrumbs: (breadcrumbs) => set((state) => ({ ...state, breadcrumbs })),
});

let settingsStore = (set) => ({
  token: null,
  darkMode: false,
  isMenuOpen: true,
  lang: storage.get("lang") || config.DEFAULT_APP_LANG,
  product: {},
  riskList: [],
  setToken: (token) => set((state) => ({ ...state, token })),
  setLang: (lang) => set((state) => ({ ...state, lang })),
  setMode: () => set((state) => ({ ...state, darkMode: !state.darkMode })),
  setOpenMenu: () =>
    set((state) => ({ ...state, isMenuOpen: !state.isMenuOpen })),
  setProduct: (attr) =>
    set((state) => ({ product: { ...state.product, ...attr } })),
  resetProduct: () => set((state) => ({ ...state, product: {} })),
  addRiskList: (item) =>
    set((state) => ({ ...state, riskList: [...state.riskList, item] })),
  removeRiskList: (_id) =>
    set((state) => ({
      ...state,
      riskList: state.riskList.filter(({ id }) => id !== _id),
    })),
  resetRiskList: () => set((state) => ({ ...state, riskList: [] })),
});

store = devtools(store);
settingsStore = devtools(settingsStore);
settingsStore = persist(settingsStore, { name: "settings" });

export const useStore = create(store);
export const useSettingsStore = create(settingsStore);
