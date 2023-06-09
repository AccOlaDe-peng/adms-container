import { Card, Tabs, Space, DatePicker } from "antd";
import { Column } from "@ant-design/plots";
import "../style.scss";

interface SalesCardProps {
	loading: boolean;
	data: any[];
}

const tabBarStyle = { marginBottom: 24, padding: "0 16px" };

const SalesCard: React.FC<SalesCardProps> = ({ loading, data }) => {
	return (
		<Card
			loading={loading}
			bordered={false}
			bodyStyle={{ padding: 0 }}
			className="analysis_salesCard"
			style={{ height: "100%" }}
		>
			<Tabs
				size="large"
				tabBarStyle={tabBarStyle}
				items={[
					{
						label: "销售额",
						key: "sales",
						children: (
							<Column
								height={300}
								autoFit
								data={data}
								xField="x"
								yField="y"
								xAxis={{
									title: {
										text: "2022年",
									},
								}}
								yAxis={{
									title: {
										text: "销售量",
									},
								}}
								meta={{
									y: {
										alias: "销售量",
									},
								}}
							/>
						),
					},
					{
						label: "访问量",
						key: "views",
						children: (
							<Column
								height={300}
								autoFit
								data={data}
								xField="x"
								yField="y"
								xAxis={{
									title: {
										text: "2022年",
									},
								}}
								yAxis={{
									title: {
										text: "访问量",
									},
								}}
								meta={{
									y: {
										alias: "访问量",
									},
								}}
							/>
						),
					},
				]}
				// tabBarExtraContent={<TabBarExtraContent />}
			/>
		</Card>
	);
};

function TabBarExtraContent() {
	const { RangePicker } = DatePicker;

	return (
		<Space size="large">
			<a>今日</a>
			<a>本周</a>
			<a>本月</a>
			<a>本年</a>
			<RangePicker
				style={{ width: 256 }}
				onChange={(date, string) => {
					console.log(date, string);
				}}
			/>
		</Space>
	);
}

export default SalesCard;
