import { Button, Col, Result, Row } from "antd";
import React from "react";

const ErrorBoundary: React.FC = () => {
    return (
        <Row
            justify="center"
            align="middle"
            wrap={false}
            style={{ height: "100vh" }}
        >
            <Col>
                <Result
                    status="error"
                    title="对不起，发生意外错误！"
                    subTitle="由此给您带来的不便，我们深表歉意！此错误已自动上报平台，我们将立即处理。"
                    extra={[
                        <Button
                            type="primary"
                            key="connectionManager"
                            onClick={() => {
                                console.log("联系管理员事件触发。");
                            }}
                        >
                            联系管理员
                        </Button>,
                    ]}
                />
            </Col>
        </Row>
    );
};

export default ErrorBoundary;
