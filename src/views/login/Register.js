// 注册组件
import { Component } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

class Register extends Component {

    // 去登录
    toLoginFun = () =>{
        this.props.toggleInterfaceFun("login");
    }

    render() {
        return (
            <div className="login-wrap">
                <div className="loginFrom login-container">
                    <h4>注册 <span onClick={this.toLoginFun}>去登录</span></h4>
                    <Form name="normal_login" className="login-form" initialValues={{ remember: true }}>
                        <Form.Item name="username" rules={[{ required: true, message: '请输入用户名！' }]} >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                        </Form.Item>
                        <Form.Item name="password" rules={[{ required: true, message: '请输入密码！' }]} >
                            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="密码" />
                        </Form.Item>
                        <Form.Item name="confirmpassword" rules={[{ required: true, message: '请输入确认密码！' }]} >
                            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="确认密码" />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">注册</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}
export default Register;