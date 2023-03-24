import ReactDOM from "react-dom/client";
import { DarkModeConfigProvider } from "./components/DarkMode";
import { ThemeColorConfigProvider } from "./components/ThemeColors";
import { ConfigProvider } from "antd";
import App from "./App";
import zhCN from "antd/locale/zh_CN";
import "@/mock";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<DarkModeConfigProvider>
		<ThemeColorConfigProvider>
			<ConfigProvider locale={zhCN}>
				<App />
			</ConfigProvider>
		</ThemeColorConfigProvider>
	</DarkModeConfigProvider>
);
