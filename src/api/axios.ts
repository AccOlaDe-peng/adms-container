import axios from "axios";
import { message as AntdMessage } from "antd";
import { REQUEST_ERROR_MESSAGE } from "../utils/constant/api";
import { getTokenAUTH } from "../utils/util/auth";

interface customOptionsType {
	repeat_request_cancel?: boolean; // 是否开启取消重复请求, 默认为 true
	error_message_show?: boolean;
}

interface reqConfigType {
	[index: string]: any;
}

//初始化
const service = axios.create({
	baseURL: "",
	timeout: 5000,
});

//pending集合
const pendingMap = new Map();
// loading实例
const LoadingInstance = {
	_target: null, // 保存Loading实例
	_count: 0,
};

/**
 * 生成每个请求唯一的键
 * @param {*} config
 * @returns string
 */
function getPendingKey(config: reqConfigType) {
	let { url, method, params, data } = config;
	if (typeof data === "string") data = JSON.parse(data); // response里面返回的config.data是个字符串对象
	return [url, method, JSON.stringify(params), JSON.stringify(data)].join("&");
}

/**
 * 储存每个请求唯一值, 也就是cancel()方法, 用于取消请求
 * @param {*} config
 */
function addPending(config: reqConfigType) {
	const pendingKey = getPendingKey(config);
	config.cancelToken =
		config.cancelToken ??
		new axios.CancelToken((cancel) => {
			if (!pendingMap.has(pendingKey)) {
				pendingMap.set(pendingKey, cancel);
			}
		});
}

/**
 * 删除重复的请求
 * @param {*} config
 */
function removePending(config: reqConfigType) {
	const pendingKey = getPendingKey(config);
	if (pendingMap.has(pendingKey)) {
		const cancelToken = pendingMap.get(pendingKey);
		cancelToken(pendingKey);
		pendingMap.delete(pendingKey);
	}
}

/**
 * 处理异常
 * @param {*} error
 */
function httpErrorStatusHandle(error: any) {
	//处理被取消的请求
	if (axios.isCancel(error))
		return console.log("请求的重复请求：" + error.message);
	let message = "";
	if (error && error.response) {
		message =
			REQUEST_ERROR_MESSAGE?.[error?.response?.status] ??
			"异常问题，请联系管理员！";
	}
	if (error.message.includes("timeout")) message = "网络请求超时！";
	if (error.message.includes("Network"))
		message = window.navigator.onLine ? "服务端异常！" : "您断网了！";

	AntdMessage.error(message);
}

/**
 * 基于axios 二次封装
 * @param {*} url 请求链接
 * @param {*} reqConfig 请求配置
 * @param {*} customOptions 自定义配置 {
 * repeat_request_cancel， 是否开启取消重复请求
 * error_message_show 是否开启接口错误信息展示
 *  }
 */
function request(
	url: string,
	reqConfig: reqConfigType,
	customOptions?: customOptionsType
) {
	// 自定义配置
	const custom_options = Object.assign(
		{
			repeat_request_cancel: false, // 是否开启取消重复请求, 默认为 true
			error_message_show: true, // 是否开启接口错误信息展示，默认为true
		},
		customOptions
	);
	//请求拦截
	const allConfig = { url, ...reqConfig };
	service.interceptors.request.use(
		(config) => {
			removePending(config);
			// 自动携带token
			const token = getTokenAUTH();
			if (token && typeof window !== "undefined") {
				config.headers.Authorization = token;
			}

			custom_options?.repeat_request_cancel && addPending(config);
			return config;
		},
		(error) => {
			return Promise.reject(error);
		}
	);

	//响应拦截
	service.interceptors.response.use(
		(response) => {
			removePending(response.config);
			return response;
		},
		(error) => {
			error.config && removePending(error.config);
			custom_options.error_message_show && httpErrorStatusHandle(error); // 处理错误状态码
			return Promise.reject(error);
		}
	);

	return service.request(allConfig);
}

export default request;
