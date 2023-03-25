import React, { Suspense } from "react";
import Loading from "./components/Loading";
import router from "@/router/routes";
import { RouterProvider } from "react-router-dom";

const App: React.FC = () => {
	return (
		<Suspense fallback={<Loading />}>
			<RouterProvider router={router} />
		</Suspense>
	);
};

export default App;
