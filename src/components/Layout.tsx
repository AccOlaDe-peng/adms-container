import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import Logo from "./Logo";
import Footer from "./Footer";
import Loading from "./Loading";
import LayoutMenu from "./Menu";
import LayoutHeader from "./Header";
import useLayoutConfig from "@/store/useLayoutConfig";

const AdminLayout: React.FC = () => {
    const { Sider, Content } = Layout;
    const { collapsed } = useLayoutConfig(
        (state: any) => state.layoutConfig.collapsed
    );
    return (
        <Layout hasSider>
            <Sider
                width={260}
                collapsedWidth={80}
                trigger={null}
                // collapsible
                collapsed={collapsed}
            >
                <div
                    style={{
                        overflowY: "auto",
                        height: "100vh",
                        position: "sticky",
                        top: 0,
                    }}
                >
                    <Logo />
                    <LayoutMenu />
                </div>
            </Sider>
            <Layout className="site-layout">
                <LayoutHeader />
                <Content className="site-content">
                    <Suspense fallback={<Loading height="100%" />}>
                        <Outlet />
                    </Suspense>
                </Content>
                <Footer />
            </Layout>
        </Layout>
    );
};
export default AdminLayout;
