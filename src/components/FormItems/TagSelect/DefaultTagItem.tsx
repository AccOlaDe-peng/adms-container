import { Tag } from "antd";

export interface DefaultTagItemProps {
    label: string;
    value: string;
    disabled?: boolean;
    isSelected?: boolean;
    onClick?: DefaultTagItemClick;
}

export type DefaultTagItemClick = (
    v: DefaultTagItemProps["value"],
    option: Pick<DefaultTagItemProps, "label" | "value">
) => void;

const DefaultTagItem: React.FC<DefaultTagItemProps> = ({
    disabled,
    label,
    value,
    isSelected = false,
    onClick,
}) => {
    const { CheckableTag } = Tag;

    if (disabled) {
        return isSelected ? (
            <CheckableTag key={value} checked={isSelected as boolean}>
                {label}
            </CheckableTag>
        ) : (
            <Tag key={value} style={{ border: "none", paddingInline: 8 }}>
                {label}
            </Tag>
        );
    }

    return (
        <CheckableTag
            key={value}
            checked={isSelected}
            onChange={() => onClick?.(value, { label, value })}
        >
            {label}
        </CheckableTag>
    );
};

export default DefaultTagItem;
