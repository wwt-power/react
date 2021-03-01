import {Component,Fragment} from "react"
import { Layout } from 'antd';
import "./layout.css"

// 侧边栏
import SideBar from "./SideBar" 
import TopBar from "./TopBar"
import ContainerMain from "@common/router/ContainerMain.js"

//路由
import {BrowserRouter} from 'react-router-dom';

const { Header, Sider, Content } = Layout;

export default class Index extends Component{
	render(){
		return(
			<Fragment>
				<BrowserRouter>
					<Layout className="layout-wrap">
						<Header>
							<TopBar />
						</Header>
						<Layout>
							<Sider width="263px" >
								<SideBar />
							</Sider>
							<Content>
								<ContainerMain />
							</Content>
						</Layout>
					</Layout>
				</BrowserRouter>
			</Fragment>
		)
	}
}