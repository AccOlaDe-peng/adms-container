import { StoreApi, UseBoundStore, create } from "zustand";
import { persist } from "zustand/middleware";

const useLoading: UseBoundStore<StoreApi<any>> = create(
    persist(
        (set) => ({
            loading: false,
            setLoading: (loading: boolean) => set(() => ({ loading })),
        }),
        { name: "persist-loading" }
    )
);

export default useLoading;
