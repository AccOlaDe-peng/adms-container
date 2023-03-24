import request from "../axios";

/**
 * 分析页接口
 */
export const fetchAnalysisChart = () =>
    request("/login", {
        method: "get",
    });
