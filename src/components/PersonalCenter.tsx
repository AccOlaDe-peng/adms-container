import React from "react";
import { Dropdown, Row, Col, Avatar } from "antd";
import type { MenuProps } from "antd";
import Icon from "@/components/Icons";
import { useNavigate } from "react-router-dom";
import { localStorageLogout } from "@/utils/util/auth";
import useUserConfig from "@/store/useUser";
import { PERSONAL_CENTER_MENU_KEYS } from "@/utils/constant/auth";

const PersonalCenterEntry: React.FC = () => {
	const navigate = useNavigate();
	const items: MenuProps["items"] = [
		{
			key: PERSONAL_CENTER_MENU_KEYS.MYINFO,
			label: "我的信息",
			icon: <Icon type="IdcardOutlined" />,
		},
		{
			key: PERSONAL_CENTER_MENU_KEYS.MODIFYPASSWORD,
			label: "修改密码",
			icon: <Icon type="FormOutlined" />,
		},
		{ type: "divider" },
		{
			key: PERSONAL_CENTER_MENU_KEYS.LOGOUT,
			danger: true,
			label: "退出登录",
			icon: <Icon type="PoweroffOutlined" />,
		},
	];

	const userInfo = useUserConfig((state: any) => state.userConfig.userInfo);
	return (
		<Dropdown
			trigger={["hover"]}
			menu={{
				items,
				style: { width: 110 },
				onClick: (e) => {
					switch (e.key) {
						case PERSONAL_CENTER_MENU_KEYS.MYINFO:
							navigate("/my-info");
							break;
						case PERSONAL_CENTER_MENU_KEYS.MODIFYPASSWORD:
							navigate("/change-password");
							break;
						case PERSONAL_CENTER_MENU_KEYS.LOGOUT:
							localStorageLogout(); // 清楚硬盘（如：localStorage）中的所有数据
							navigate("login");
							break;
					}
				},
			}}
		>
			<Row
				gutter={10}
				style={{
					cursor: "pointer",
					marginTop: -2,
					userSelect: "none",
					padding: "0 10px",
				}}
			>
				<Col>
					<Avatar size="default" icon={<Icon type="UserOutlined" />} />
				</Col>
				<Col>{userInfo.Name || "Admin"}</Col>
			</Row>
		</Dropdown>
	);
};

export default PersonalCenterEntry;
