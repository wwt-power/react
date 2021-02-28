import {Component,Fragment} from "react"
import { Layout } from 'antd';
import "./layout.css"

// 侧边栏
import SideBar from "./SideBar" 
import TopBar from "./TopBar"
import ContainerMain from "@common/router/ContainerMain.js"

const { Header, Sider, Content } = Layout;

export default class Index extends Component{
	render(){
		return(
			<Fragment>
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
			</Fragment>
		)
	}
}