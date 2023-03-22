import { StoreApi, UseBoundStore, create } from "zustand";

const useLoading: UseBoundStore<StoreApi<unknown>> = create((set) => ({
	loading: false,
	setLoading: (loading: boolean) => set(() => ({ loading })),
}));

export default useLoading;
