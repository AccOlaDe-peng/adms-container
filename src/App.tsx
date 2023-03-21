import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/user/login";

const App: React.FC = () => {
	return (
		<div style={{ width: "100%" }}>
			<Routes>
				<Route path="/" element={<Layout />} />
				<Route path="/user/login" element={<Login />}></Route>
			</Routes>
		</div>
	);
};

export default App;
