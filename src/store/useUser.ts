import { StoreApi, UseBoundStore, create } from "zustand";
import { persist } from "zustand/middleware";
import { IRoute } from "../router/routes";
import { login } from "../api/modules/user";

export interface UserConfigType {
    menuItems: IRoute[];
    userInfo: API.UserInfo;
    token: string | undefined;
    isLogin: boolean;
}

const useUserConfig: UseBoundStore<StoreApi<any>> = create(
    persist(
        (set) => ({
            userConfig: {
                menuItems: [],
                userInfo: {},
                token: undefined,
                isLogin: false,
            },
            setToken: (token: string) =>
                set((state: UserConfigType) => ({ ...state, token })),
            setUserInfo: (userInfo: API.UserInfo) =>
                set((state: UserConfigType) => ({ ...state, userInfo })),
            setMenuItems: (menuItems: IRoute[]) =>
                set((state: UserConfigType) => ({ ...state, menuItems })),
            fetchUserLogin: async (userEntity: API.LoginParams) => {
                const { data } = await login(userEntity);
                set((state: UserConfigType) => ({
                    ...state,
                    userInfo: data.userInfo,
                    token: data.token,
                    isLogin: true,
                }));
            },
            setLogout: () =>
                set((state: UserConfigType) => ({ ...state, isLogin: false })),
            clear: () => {
                return set((state: UserConfigType) => ({
                    menuItems: [],
                    userInfo: {},
                    token: undefined,
                    isLogin: false,
                }));
            },
        }),
        {
            name: "USER_CONFIG",
        }
    )
);

export default useUserConfig;
