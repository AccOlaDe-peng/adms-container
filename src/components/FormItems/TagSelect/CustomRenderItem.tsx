import { theme } from "antd";
import styled from "styled-components";
import type { GlobalToken } from "antd/es/theme/interface";
import type { RenderItemArgs } from "./index";

const CustomRenderItem: React.FC<RenderItemArgs> = ({
    disabled,
    label,
    value,
    isSelected = false,
    onClick,
}) => {
    const { useToken } = theme;
    const { token } = useToken();
    return (
        <ItemBox
            disabled={disabled}
            isSelected={isSelected}
            themeToken={token}
            onClick={() => {
                if (disabled) return;
                onClick();
            }}
        >
            {label}
        </ItemBox>
    );
};

interface ItemBoxProps {
    disabled?: boolean;
    isSelected: boolean;
    themeToken: GlobalToken;
}

const computeTextColor = ({
    isSelected,
    disabled,
    themeToken,
}: ItemBoxProps) => {
    if (isSelected) {
        return themeToken.colorPrimary;
    }
    if (disabled) {
        return themeToken.colorTextDisabled;
    }
    return themeToken.colorTextBase;
};

const ItemBox = styled.span`
    user-select: none;
    padding: 2px 6px;
    line-height: ${(props) => props.themeToken.lineHeight};
    transition: color ${(props) => props.themeToken.motionDurationSlow};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    color: ${(props) =>
        computeTextColor({
            isSelected: props.isSelected,
            disabled: props.disabled,
            themeToken: props.themeToken,
        })};
    &:hover {
        color: ${(props: ItemBoxProps) => {
            if (props.disabled) return;
            return props.themeToken.colorPrimaryHover;
        }};
    }
`;

export default CustomRenderItem;
