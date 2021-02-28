import React,{Component} from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";
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
			<BrowserRouter>
				<Switch>
					<Route path="/index/user/list" exact component={UserList} />
					<PrivateRouter exact path="/index/user/add" component={UserAdd} />
				</Switch>
			</BrowserRouter>
		);
	}
}
