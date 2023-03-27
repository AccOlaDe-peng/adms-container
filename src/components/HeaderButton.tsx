import { Button } from "antd";
import type { ButtonProps } from "antd";

const HeaderButton: React.FC<ButtonProps> = ({ children, ...btnProps }) => {
    return (
        <Button
            shape="circle"
            style={{
                border: "none",
                backgroundColor: "transparent",
                fontSize: 14,
            }}
            block
            {...btnProps}
        >
            {children}
        </Button>
    );
};

export default HeaderButton;
