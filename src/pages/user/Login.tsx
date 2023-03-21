import React from "react";
import { Form, Input } from "antd";
import { LoginFormType } from "./user";
import style from "./style.module.scss";

const Login: React.FC = () => {
	const handleSubmit = async (values: LoginFormType) => {};

	return (
		<div className={style.container}>
			<Form
				onFinish={handleSubmit}
				className={style.form}
				labelCol={{ span: 5 }}
				wrapperCol={{ span: 16 }}
			>
				<Form.Item label="用户名" name="username" required>
					<Input placeholder="Username" />
				</Form.Item>
				<Form.Item label="密码" name="password" required>
					<Input type="password" placeholder="Password" />
				</Form.Item>
			</Form>
		</div>
	);
};

export default Login;
