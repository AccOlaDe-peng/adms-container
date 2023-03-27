import { ProFormText, ProFormItemProps } from "@ant-design/pro-components";

const EmailInput: React.FC<ProFormItemProps> = ({ rules = [], ...props }) => {
    return (
        <ProFormText
            placeholder="请输入邮箱"
            rules={[
                {
                    pattern:
                        /^[a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+[-.])+[A-Za-zd]{2,5}$/,
                    message: "请输入正确的邮箱",
                },
                ...rules,
            ]}
            {...props}
        />
    );
};

export default EmailInput;
