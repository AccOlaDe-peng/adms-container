import React from "react";
import {
    ProBreadcrumb,
    ProForm,
    ProFormText,
    ProLayout,
} from "@ant-design/pro-components";

const Test: React.FC = () => {
    return (
        <ProLayout
            title="adms"
            logo={<img src="/src/assets/react.svg" />}
            route={[
                {
                    name: "测试",
                    path: "/serer",
                },
            ]}
            headerContentRender={() => (
                <>
                    <ProBreadcrumb style={{ float: "left" }} />
                    <div>xxx</div>
                    {/* <SwitchDashboard /> */}
                </>
            )}
        />
    );
};

export default Test;
