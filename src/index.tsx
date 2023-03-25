import ReactDOM from "react-dom/client";
import { DarkModeConfigProvider } from "./components/DarkMode";
import { ThemeColorConfigProvider } from "./components/ThemeColors";
import { App, ConfigProvider } from "antd";
import MyApp from "./App";
import zhCN from "antd/locale/zh_CN";
import "@/mock";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<DarkModeConfigProvider>
		<ThemeColorConfigProvider>
			<ConfigProvider locale={zhCN}>
				<App>
					<MyApp />
				</App>
			</ConfigProvider>
		</ThemeColorConfigProvider>
	</DarkModeConfigProvider>
);
