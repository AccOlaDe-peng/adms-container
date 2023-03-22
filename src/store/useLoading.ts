import { create } from "zustand";

const useLoading = create((set) => ({
    loading: false,
    setLoading: (loading: boolean) => set(() => ({ loading })),
}));

export default useLoading;
