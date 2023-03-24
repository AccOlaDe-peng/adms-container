import { Navigate, useLocation } from "react-router-dom";
import { useRequest } from "ahooks";
import { Spin, Row, Col } from "antd";
import useUserConfig from "@/store/useUser";
import { fetchIsTokenValid } from "@/api/modules/user";

/**
 * 路由守卫
 * @description 验证用户token是否在有效期。
 */
const RouterAuth = ({ children }: { children: JSX.Element }) => {
	const location = useLocation();
	const token = useUserConfig((state: any) => state.userConfig.token);
	// ToDO: 未完成
	const { data: tokenIsValid, loading } = useRequest(fetchIsTokenValid, {
		refreshDeps: [location],
	});

	console.log(loading, tokenIsValid);

	if (loading) {
		return <RouteAuthLoading />;
	}

	if (!token || !tokenIsValid) {
		return <Navigate to="/login" state={location} replace />;
	}

	return children;
};

function RouteAuthLoading() {
	return (
		<Row justify="center" align="middle" style={{ height: "100%" }}>
			<Col>
				<Spin tip="用户认证中..." />
			</Col>
		</Row>
	);
}

export default RouterAuth;
