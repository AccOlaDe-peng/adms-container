import React, { Suspense } from "react";
import Loading from "./components/Loading";
import router from "@/router/routes";
import { RouterProvider } from "react-router-dom";

const App: React.FC = () => {
    return (
        <Suspense fallback={<Loading />}>
            <RouterProvider router={router} />
        </Suspense>
        // <div style={{ width: "100%" }}>
        //     <Routes>
        //         <Route path="*" element={<Layout />} />
        //         <Route path="/user/login" element={<Login />} />
        //         <Route path="/test" element={<Test />} />
        //     </Routes>
        // </div>
    );
};

export default App;

//获取主题颜色
