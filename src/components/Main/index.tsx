import React from "react";
import WuJieReact from "wujie-react";

const Page1: React.FC = () => {
    const { bus, preloadApp } = WuJieReact;
    bus.$on("send", (arr: string, brr: Function) => {
        console.log(arr, brr);
    });
    return (
        <WuJieReact
            width="100%"
            height="100%"
            name="page1"
            url="http://127.0.0.1:8081/"
            alive={true}
            plugins={[
                {
                    jsBeforeLoaders: [
                        {
                            content: "window.Antd = window.parent.Antd",
                        },
                    ],
                },
            ]}
            //   sync="{true}"
            //   fetch="{fetch}"
            //   props="{props}"
            //   beforeLoad="{beforeLoad}"
            //   beforeMount="{beforeMount}"
            //   afterMount="{afterMount}"
            //   beforeUnmount="{beforeUnmount}"
            //   afterUnmount="{afterUnmount}"
        />
    );
};

export default Page1;
