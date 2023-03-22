import React from "react";
import { ConfigProvider } from "antd";
import useTheme from "../store/useTheme";

export function ThemeColorConfigProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const themeColor = useTheme((state: any) => state.layoutConfig.themeColor);
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
