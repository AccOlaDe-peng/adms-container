import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { DarkModeConfigProvider } from "./components/DarkMode";
import { ThemeColorConfigProvider } from "./components/ThemeColors";
import { ConfigProvider } from "antd";
import App from "./App";
import zhCN from "antd/locale/zh_CN";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <DarkModeConfigProvider>
        <ThemeColorConfigProvider>
            <ConfigProvider locale={zhCN} input={{ autoComplete: "off" }}>
                <App />
            </ConfigProvider>
        </ThemeColorConfigProvider>
    </DarkModeConfigProvider>
);
