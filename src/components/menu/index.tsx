import React, { ReactElement } from "react";
import { Menu } from "antd";
import {
    AppstoreOutlined,
    MailOutlined,
    CalendarOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

interface MenuInfo {
    key: string;
}

const NavMenu: React.FC = () => {
    const navigate = useNavigate();
    const items = [
        getItem("Navigation One", "dashboard", <MailOutlined />),
        getItem("Navigation Two", "about", <CalendarOutlined />),
        getItem("Navigation Three", "page1", <AppstoreOutlined />),
    ];

    function getItem(label: string, key: string, icon?: ReactElement) {
        return {
            key,
            icon,
            label,
        };
    }

    const handleNavChange = (itemObj: MenuInfo) => {
        const { key: path } = itemObj;
        if (path === "dashboard") {
            navigate(`${path}/232?id=123123`);
        } else if (path === "about") {
            navigate(`${path}/2`);
        } else {
            navigate(`${path}`);
        }
    };

    return (
        <div>
            <Menu
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                onClick={handleNavChange}
                items={items}
            />
        </div>
    );
};

export default NavMenu;
