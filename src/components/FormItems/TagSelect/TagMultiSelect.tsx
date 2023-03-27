import { Space } from "antd";
import DefaultTagItem from "./DefaultTagItem";
import type {
    DefaultTagItemProps,
    DefaultTagItemClick,
} from "./DefaultTagItem";
import type { TagSelectProps } from "./index";

export interface TagMultiSelectProps
    extends Omit<TagSelectProps, "value" | "onChange"> {
    value?: Array<DefaultTagItemProps["value"]>;
    onChange?: (
        v: TagMultiSelectProps["value"],
        options: Pick<DefaultTagItemProps, "label" | "value">[]
    ) => void;
}
const TagMultiSelect: React.FC<TagMultiSelectProps> = ({
    disabled,
    items = [],
    value = [],
    onChange,
    renderItem,
    size = "small",
}) => {
    const onClick: DefaultTagItemClick = (v) => {
        if (disabled) return;
        let values = value;
        if (value.includes(v)) {
            values = value.filter((item) => item !== v);
        } else {
            values = [...value, v];
        }
        const options = items.filter((item) => values.includes(item.value));
        onChange?.(values, options);
    };
    return (
        <Space size={size} wrap>
            {items.map((item, index) => {
                if (renderItem && typeof renderItem === "function") {
                    return renderItem({
                        disabled,
                        isSelected: value.indexOf(item.value) > -1,
                        label: item.label,
                        value: item.value,
                        onClick: () => onClick(item.value, item),
                    });
                }
                return (
                    <DefaultTagItem
                        key={index}
                        disabled={disabled}
                        isSelected={value.includes(item.value)}
                        label={item.label}
                        value={item.value}
                        onClick={onClick}
                    />
                );
            })}
        </Space>
    );
};

export default TagMultiSelect;
