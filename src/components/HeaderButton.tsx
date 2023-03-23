import { Button } from "antd";
import type { ButtonProps } from "antd";

const HeaderButton: React.FC = ({ children, ...btnProps }: ButtonProps) => {
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
