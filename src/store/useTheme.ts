import { StoreApi, UseBoundStore, create } from "zustand";
import { BreadcrumbType } from "../components/Breadcrumb";

export interface layoutConfigType {
	collapsed: boolean;
	breadcrumb: BreadcrumbType;
	isDarkMode: boolean;
	themeColor: string;
}

const useTheme: UseBoundStore<StoreApi<unknown>> = create((set) => ({
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
}));

export default useTheme;
