import request from "../axios";

//用户登录
export const login = (userEntity: API.LoginParams) => {
    return request("/login", {
        method: "POST",
        data: userEntity,
    });
};

/**
 * 验证用户登录态是否过期
 * @returns
 */
export const fetchIsTokenValid = () => {
    console.log("fetchIsTokenValid");

    return request("/auth", {
        method: "GET",
    });
};
