import React,{Component,Fragment} from "react";
import {Menu} from 'antd';
// 导入路由
import Router from "@common/router/Index.js"
// 图标字体
import { AppstoreOutlined } from '@ant-design/icons';
// 二级菜单
const {SubMenu} = Menu;


export default class AsideMenu extends Component {
	constructor(props){
		super(props);
		this.state ={
			theme: 'dark',//light  主题色
			current: '1',
		};
		console.log(Router);
	}
	
	handleClick = e => {
		console.log('click ', e);
		this.setState({
			current: e.key,
		});
	};
	
	// 有子级菜单
	renderSubMenu = (data) => {
		return(
			<SubMenu key={data.key} icon={<AppstoreOutlined />} title={data.title}>
				{
					data.subs && data.subs.map((item) =>{
						return item.subs && item.subs.length>0 ? this.renderSubMenu(item) : this.renderMenu(item)
					})
				}
			</SubMenu>
		)
	}
	
	// 无子级菜单
	renderMenu = ({key,title}) =>{
		return <Menu.Item key={key} >{title}</Menu.Item>
	}
	
	render() {
		return (
			<Fragment>
				<Menu
					theme={this.state.theme}
					onClick={this.handleClick}
					defaultOpenKeys={['sub1']}
					selectedKeys={[this.state.current]}
					mode="inline"
				>
					{
						Router && Router.map((firstItem) =>{
							return firstItem.subs && firstItem.subs.length>0 ? this.renderSubMenu(firstItem) : this.renderMenu(firstItem)
						})
					}
				</Menu>
			</Fragment>
		);
	}
}
