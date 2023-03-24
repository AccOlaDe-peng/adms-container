import { useEffect } from "react";
import { ConfigProvider, Switch, theme } from "antd";
import useLayoutConfig from "@/store/useLayoutConfig";

export function DarkModeSwitch() {
    const { isDarkMode, setDarkMode } = useLayoutConfig((state: any) => ({
        isDarkMode: state.layoutConfig.isDarkMode,
        setDarkMode: state.setIsDarkMode,
    }));
    return (
        <Switch
            // style={{ verticalAlign: 'unset' }}
            checked={isDarkMode}
            checkedChildren="🌜"
            unCheckedChildren="🌞"
            onChange={(checked) => setDarkMode(checked)}
        />
    );
}

export function DarkModeConfigProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const { darkAlgorithm } = theme;

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
