import { create } from 'zustand'
const useDataStore = create((set) => ({
    wineries: [],
    wines: [],
    setData: (data, arrayName) => set((state) => ({ ...state, [arrayName]: data })),
}));
export default useDataStore;