import { StoreApi, UseBoundStore, create } from "zustand";
import type { BreadcrumbType } from "@/components/Breadcrumb";
import { persist } from "zustand/middleware";

export interface layoutConfigType {
    collapsed: boolean;
    breadcrumb: BreadcrumbType;
    isDarkMode: boolean;
    themeColor: string;
}

interface useLayoutStateType {
    layoutConfig: layoutConfigType;
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
            setAllLayoutConfig: (config: layoutConfigType) =>
                set(() => ({ layoutConfig: config })),
            setBreadcrumb: (breadcrumb: BreadcrumbType) =>
                set((state: useLayoutStateType) => ({
                    layoutConfig: {
                        ...state.layoutConfig,
                        breadcrumb,
                    },
                })),
            setCollapsed: (collapsed: boolean) =>
                set((state: useLayoutStateType) => ({
                    layoutConfig: {
                        ...state.layoutConfig,
                        collapsed,
                    },
                })),
            setIsDarkMode: (isDarkMode: boolean) =>
                set((state: useLayoutStateType) => ({
                    layoutConfig: {
                        ...state.layoutConfig,
                        isDarkMode,
                    },
                })),
            setThemeColor: (themeColor: string) =>
                set((state: useLayoutStateType) => ({
                    layoutConfig: {
                        ...state.layoutConfig,
                        themeColor,
                    },
                })),
        }),
        {
            name: "LAYOUT_CONFIG",
        }
    )
);

export default useLayoutConfig;
