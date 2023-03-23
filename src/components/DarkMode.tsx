import { useEffect } from "react";
import useLayoutConfig from "../store/useLayoutConfig";
import { ConfigProvider, theme } from "antd";
const { darkAlgorithm } = theme;

export function DarkModeConfigProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const isDarkMode = useLayoutConfig(
        (state: any) => state.layoutConfig.isDarkMode
    );
    useEffect(() => {
        document.body.className = isDarkMode ? "dark" : "";
    }, [isDarkMode]);
    return (
        <ConfigProvider
            theme={{
                algorithm: isDarkMode ? [darkAlgorithm] : undefined,
            }}
        >
            {children}
        </ConfigProvider>
    );
}
