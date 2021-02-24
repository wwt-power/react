import { Component,Fragment } from "react";
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

export default class LoginForm extends Component{
    state = {

    };
    //去注册
    toRegisterFun = () =>{
        this.props.toggleInterfaceFun("register");
    }

    onFinish = (form) =>{
        console.log(this.props);
        this.props.history.push("/home");
    }
    
    render(){
        return(
            <Fragment>
                <div className="login-wrap">
                    <div className="loginFrom login-container">
                        <h4>登录 <span onClick={this.toRegisterFun}>去注册</span></h4>
                        <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={this.onFinish}>
                            <Form.Item name="username" rules={[{ required: true, message: '请输入用户名！' }]} >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                            </Form.Item>
                            <Form.Item name="password" rules={[{ required: true, message: '请输入密码！' }]} >
                                <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="密码" />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </Fragment>
        )
    }
}