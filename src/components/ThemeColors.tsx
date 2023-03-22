import React from "react";
import { ConfigProvider } from "antd";

export function ThemeColorConfigProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const themeColor = useAppSelector(selectThemeColor);
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
