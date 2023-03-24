import { StoreApi, UseBoundStore, create } from "zustand";
import { persist } from "zustand/middleware";
import { IRoute } from "../router/routes";
import { login } from "../api/modules/user";
import produce from "immer";

export interface UserConfigType {
    menuItems: IRoute[];
    userInfo: API.UserInfo;
    token: string | undefined;
    isLogin: boolean;
}

interface useUserStateType {
    userConfig: UserConfigType;
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
            // setToken: (token: string) =>
            //     set(
            //         produce((state: useUserStateType) => ({
            //             token,
            //         }))
            //     ),
            // setUserInfo: (userInfo: API.UserInfo) =>
            //     set((state: useUserStateType) => ({
            //         userConfig: {
            //             ...state.userConfig,
            //             userInfo,
            //         },
            //     })),
            // setMenuItems: (menuItems: IRoute[]) =>
            //     set((state: useUserStateType) => ({
            //         userConfig: {
            //             ...state.userConfig,
            //             menuItems,
            //         },
            //     })),
            fetchUserLogin: async (userEntity: API.LoginParams) => {
                const { data } = await login(userEntity);
                const dataInfo = data?.data;
                set(
                    // produce((state: useUserStateType) => ({
                    //     userInfo: dataInfo?.userInfo,
                    //     token: dataInfo?.token,
                    //     isLogin: true,
                    // }))
                    (state: useUserStateType) => ({
                        userConfig: {
                            ...state.userConfig,
                            userInfo: dataInfo?.userInfo,
                            token: dataInfo?.token,
                            isLogin: true,
                        },
                    })
                );
            },
            // setLogout: () =>
            //     set((state: useUserStateType) => ({
            //         userConfig: {
            //             ...state.userConfig,
            //             isLogin: false,
            //         },
            //     })),
            // clear: () => {
            //     return set((state: useUserStateType) => ({
            //         userConfig: {
            //             menuItems: [],
            //             userInfo: {},
            //             token: undefined,
            //             isLogin: false,
            //         },
            //     }));
            // },
        }),
        {
            name: "USER_CONFIG",
        }
    )
);

export default useUserConfig;
