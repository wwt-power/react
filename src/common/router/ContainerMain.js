import React,{Component} from "react";
import {Switch,Route} from "react-router-dom";
// 私有组件方法
import PrivateRouter from "@common/router/PrivateRouter.js"
// page
import UserList from "@views/page/user/List.js"
import UserAdd from "@views/page/user/Add.js"


export default class ContainerMain extends Component {
	constructor(props){
		super(props);
		this.state ={};
	}
	
	render() {
		return (
			<Switch>
				<Route exact path="/user/list" component={UserList} />
				<PrivateRouter exact path="/user/add" component={UserAdd} />
			</Switch>
		);
	}
}
