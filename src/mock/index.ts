import Mock, { mock } from "mockjs";
import { MockMethod } from "vite-plugin-mock";

const postLogin = mock({
    userInfo: {
        id: "@id",
        username: "@name",
    },
    token: "@guid",
});

export default [
    {
        url: "/login",
        method: "post",
        response: (res: any) => {
            return {
                code: 0,
                data: postLogin,
            };
        },
    },
    {
        url: "/auth",
        method: "get",
        response: (res: any) => {
            console.log(res);

            return {
                code: 0,
                data: true,
                success: true,
            };
        },
    },
] as MockMethod[];
