import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout as AntdLayout } from "antd";
import Menu from "../menu";
import Home from "../Home";
import Main from "../Main";
import style from "./style.module.scss";
// import style from "./style.scss?inline";

const headerStyle = {
	color: "#fff",
	height: 64,
	paddingInline: 50,
	lineHeight: "64px",
	backgroundColor: "#7dbcea",
};
const contentStyle = {
	minHeight: 120,
};
const siderStyle = {
	lineHeight: "120px",
	color: "#fff",
	height: "100%",
	backgroundColor: "#fff",
};
const footerStyle = {
	color: "#fff",
	backgroundColor: "#7dbcea",
};
const Layout: React.FC = () => {
	const { Content, Sider, Header, Footer } = AntdLayout;

	return (
		<AntdLayout className={style.container}>
			<Sider className={style.slider}>
				<Menu />
			</Sider>
			<AntdLayout>
				<Header style={headerStyle}>Header</Header>
				<Content style={contentStyle}>
					<Routes>
						<Route path="dashboard/:id" element={<Home />} />
						<Route path="page1" element={<Main />}></Route>
					</Routes>
				</Content>
				<Footer style={footerStyle}>Footer</Footer>
			</AntdLayout>
		</AntdLayout>
	);
};

export default Layout;
