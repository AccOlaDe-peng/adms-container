import React from "react";
import Icon from "@/components/Icons";
import { Layout, Row, Col, Space } from "antd";
import LayoutBreadcrumb from "./Breadcrumb";
import PersonalCenter from "./PersonalCenter";
import LocalSettingsHeaderButton from "./LocalSettings";
import { FullScreenHeaderButton } from "./FullScreen";
import NoticeHeaderButton from "./NoticeIcon";
import HeaderButton from "./HeaderButton";
import useLayoutConfig from "@/store/useLayoutConfig";
const { Header } = Layout;

export default function LayoutHeader() {
    const { collapsed, isDarkMode, setCollapsed } = useLayoutConfig(
        (state: any) => ({
            collapsed: state.layoutConfig.collapsed,
            isDarkMode: state.layoutConfig.isDarkMode,
            setCollapsed: state.layoutConfig.setCollapsed,
        })
    );
    return (
        <Header
            style={{
                height: 48,
                lineHeight: "48px",
                padding: "0 12px",
                backgroundColor: !isDarkMode ? "#fff" : undefined,
            }}
        >
            <Row justify="space-between" align="middle">
                <Col>
                    <Space>
                        <HeaderButton
                            icon={React.createElement(
                                collapsed
                                    ? Icon.MenuUnfoldOutlined
                                    : Icon.MenuFoldOutlined
                            )}
                            onClick={() => setCollapsed(!collapsed)}
                        />
                        <LayoutBreadcrumb />
                    </Space>
                </Col>
                <Col>
                    <Space>
                        <FullScreenHeaderButton />
                        <NoticeHeaderButton />
                        <PersonalCenter />
                        <LocalSettingsHeaderButton />
                    </Space>
                </Col>
            </Row>
        </Header>
    );
}
