import { StoreApi, UseBoundStore, create } from "zustand";
import type { BreadcrumbType } from "@/components/Breadcrumb";
import { persist } from "zustand/middleware";

export interface layoutConfigType {
    collapsed: boolean;
    breadcrumb: BreadcrumbType;
    isDarkMode: boolean;
    themeColor: string;
}

const useLayoutConfig: UseBoundStore<StoreApi<any>> = create(
    persist(
        (set) => ({
            layoutConfig: {
                collapsed: false,
                breadcrumb: ["首页"],
                isDarkMode: false,
                themeColor: "#1677ff",
            },
            setAllLayoutConfig: (config: layoutConfigType) => set(() => config),
            setBreadcrumb: (breadcrumb: BreadcrumbType) =>
                set((state: layoutConfigType) => ({
                    ...state,
                    breadcrumb,
                })),
            setCollapsed: (collapsed: boolean) =>
                set((state: layoutConfigType) => ({
                    ...state,
                    collapsed,
                })),
            setIsDarkMode: (isDarkMode: boolean) =>
                set((state: layoutConfigType) => ({
                    ...state,
                    isDarkMode,
                })),
            setThemeColor: (themeColor: string) =>
                set((state: layoutConfigType) => ({
                    ...state,
                    themeColor,
                })),
        }),
        {
            name: "LAYOUT_CONFIG",
        }
    )
);

export default useLayoutConfig;
