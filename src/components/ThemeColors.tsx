import React from "react";
import { ConfigProvider } from "antd";
import useLayoutConfig from "../store/useLayoutConfig";

export function ThemeColorConfigProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const themeColor = useLayoutConfig(
        (state: any) => state.layoutConfig.themeColor
    );
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: themeColor,
                },
            }}
        >
            {children}
        </ConfigProvider>
    );
}
