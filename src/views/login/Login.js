import { Component, Fragment } from "react";
import "./login.css";
import LoginForm from "./LoginForm";
import Register from "./Register";

export default class Login extends Component{
    state = {
        loginType:"login"
    }
    //切换界面方法
    toggleInterfaceFun = (type) =>{
        this.setState({
            loginType:type
        })
    }

    render(){
        return(
            <Fragment>
                {
                    this.state.loginType === "login"
                    ? <LoginForm toggleInterfaceFun = {this.toggleInterfaceFun}  history={this.props.history} />
                    : <Register toggleInterfaceFun = {this.toggleInterfaceFun}  />
                }
            </Fragment>        
        )
    }
}