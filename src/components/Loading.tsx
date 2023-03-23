import { Spin, Row, Col } from "antd";
import Icon from "./Icons";
import useLayoutConfig from "../store/useLayoutConfig";

const antIcon = <Icon type="LoadingOutlined" style={{ fontSize: 24 }} spin />;

interface LoadingParams {
    height?: string | number;
}

/**
 * 正在加载图标
 * @param {LoadingParams} param0
 * @returns
 */
export default function Loading({ height }: LoadingParams) {
    const isDarkMode = useLayoutConfig(
        (state: any) => state.layoutConfig.isDarkMode
    );
    return (
        <Row
            align="middle"
            justify="center"
            style={{
                height: height ?? "100vh",
                backgroundColor: isDarkMode ? "#000" : "#fff",
            }}
        >
            <Col>
                <Spin indicator={antIcon} tip="加载中..." />
            </Col>
        </Row>
    );
}
