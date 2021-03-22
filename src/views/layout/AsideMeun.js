import React,{Component,Fragment} from "react";
import {Link,withRouter} from "react-router-dom";
import {Menu} from 'antd';
// 导入路由
import Router from "@common/router/Index.js"
// 图标字体
import { AppstoreOutlined } from '@ant-design/icons';
// 二级菜单
const {SubMenu} = Menu;


class AsideMenu extends Component {
	constructor(props){
		super(props);
		this.state ={
			theme: 'dark',//light  主题色
			openKeys:[],	//当前展开的 SubMenu 菜单项 key 数组
			selectedKeys:[]	//当前选中的菜单项 key 数组
		}
	}	
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
		return(
			<Menu.Item key={key} >
				<Link to={key}>{title}</Link>
			</Menu.Item>
		)
	}
	// 组件挂载完成时触发的函数
	componentDidMount(){
		const pathname = this.props.location.pathname;
		const openkey = pathname.split("/").slice(0,2).join('/');
		this.setState({
			openKeys:openkey,
			selectedKeys:pathname
		})
	}
	// 点击项切换当前状态
	handleClick = ({ item, key, keyPath, domEvent }) => {
		this.setState({
			openKeys:keyPath[keyPath.length-1],
			selectedKeys:key
		})
	};
	// SubMenu 展开/关闭的回调
	handleChange = (openKeys) => {
		console.log(openKeys);
	}
	
	render() {
		const {theme,openKeys,selectedKeys} = this.state;
		return (
			<Fragment>
				<Menu
					theme={theme}
					defaultOpenKeys={openKeys}
					selectedKeys={selectedKeys}
					mode="inline"
					onClick={this.handleClick}
					onOpenChange={this.handleChange}
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

export default withRouter(AsideMenu);
