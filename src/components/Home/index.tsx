// import { useSearchParams, useParams } from "react-router-dom";

import { Button } from "antd";
import { useEffect, useState } from "react";
import WuJieReact from "wujie-react";

const Home = () => {
    const [count, setCount] = useState<number>(0);
    const { bus } = WuJieReact;
    // bus.$on("send", (arr: string, brr: Function) => {
    //     console.log(arr, brr);
    //     setCount(count + 1);
    // });

    const handleCountChange = () => {
        setCount(count + 1);
    };
    useEffect(() => {
        bus.$emit("send", count);
    }, [count]);

    return <Button onClick={handleCountChange}>{count}</Button>;
};

export default Home;
