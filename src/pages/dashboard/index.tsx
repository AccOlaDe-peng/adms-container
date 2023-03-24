import { Row, Col } from "antd";
// import { useRequest } from "ahooks";
import SalesCard from "./components/SalesCard";
import Ranking from "./components/Ranking";
import BottomCards from "./components/BottomCards";
// import { fetchAnalysisChart } from "@/api/modules/dashboard";
import IntroduceRow from "./components/IntroduceRow";

interface dataType {
    visitData: Array<any>;
    salesData: Array<any>;
}

const Analysis: React.FC = () => {
    // const { loading, data = {} } = useRequest(fetchAnalysisChart);
    const loading = false;
    const data = {
        visitData: [
            { x: "2022-12-05", y: 7 },
            { x: "2022-12-06", y: 5 },
            { x: "2022-12-07", y: 4 },
            { x: "2022-12-08", y: 2 },
            { x: "2022-12-09", y: 4 },
            { x: "2022-12-10", y: 7 },
            { x: "2022-12-11", y: 5 },
            { x: "2022-12-12", y: 6 },
            { x: "2022-12-13", y: 5 },
            { x: "2022-12-14", y: 9 },
            { x: "2022-12-15", y: 6 },
            { x: "2022-12-16", y: 3 },
            { x: "2022-12-17", y: 1 },
            { x: "2022-12-18", y: 5 },
            { x: "2022-12-19", y: 3 },
            { x: "2022-12-20", y: 6 },
            { x: "2022-12-21", y: 5 },
        ],
        visitData2: [
            { x: "2022-12-05", y: 1 },
            { x: "2022-12-06", y: 6 },
            { x: "2022-12-07", y: 4 },
            { x: "2022-12-08", y: 8 },
            { x: "2022-12-09", y: 3 },
            { x: "2022-12-10", y: 7 },
            { x: "2022-12-11", y: 2 },
        ],
        salesData: [
            { x: "1月", y: 931 },
            { x: "2月", y: 310 },
            { x: "3月", y: 777 },
            { x: "4月", y: 461 },
            { x: "5月", y: 345 },
            { x: "6月", y: 777 },
            { x: "7月", y: 915 },
            { x: "8月", y: 843 },
            { x: "9月", y: 814 },
            { x: "10月", y: 685 },
            { x: "11月", y: 602 },
            { x: "12月", y: 620 },
        ],
    };

    return (
        <>
            <IntroduceRow loading={loading} visitData={data.visitData ?? []} />
            <Row gutter={16}>
                <Col span={16}>
                    <SalesCard loading={loading} data={data?.salesData ?? []} />
                </Col>
                <Col span={8}>
                    <Ranking
                        loading={loading}
                        data={Array.from({ length: 18 })}
                    />
                </Col>
            </Row>
            <BottomCards loading={loading} />
        </>
    );
};

export default Analysis;
