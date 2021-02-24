import React,{Component} from "react";
import {Menu} from 'antd';
// 图片
import figure from "../../common/static/img/figure.png"
// 图标字体
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
// 二级菜单
const {SubMenu} = Menu;


export default class SideBar extends Component {
	state = {
		theme: 'dark',//light  主题色
		current: '1',
	};
	  
	handleClick = e => {
		console.log('click ', e);
		this.setState({
			current: e.key,
		});
	};
	render() {
		return (
			<div className="sidebarModule">
				<div className="sidebarHead">
				  <span>
					窗口办理
					<img src={figure} className="sLeft" alt="figure" />
					<img src={figure} className="sRight" alt="figure" />
				  </span>
				</div>
				<Menu
					theme={this.state.theme}
					onClick={this.handleClick}
					defaultOpenKeys={['sub1']}
					selectedKeys={[this.state.current]}
					mode="inline"
				>
					<SubMenu key="sub1" icon={<MailOutlined />} title="户籍管理">
						<Menu.Item key="1">Option 1</Menu.Item>
						<Menu.Item key="2">Option 2</Menu.Item>
						<Menu.Item key="3">Option 3</Menu.Item>
						<Menu.Item key="4">Option 4</Menu.Item>
					</SubMenu>
					<SubMenu key="sub2" icon={<AppstoreOutlined />} title="字典管理">
						<Menu.Item key="5">Option 5</Menu.Item>
						<Menu.Item key="6">Option 6</Menu.Item>
						<SubMenu key="sub3" title="Submenu">
						<Menu.Item key="7">Option 7</Menu.Item>
						<Menu.Item key="8">Option 8</Menu.Item>
					</SubMenu>
					</SubMenu>
						<SubMenu key="sub4" icon={<SettingOutlined />} title="身份证">
						<Menu.Item key="9">Option 9</Menu.Item>
						<Menu.Item key="10">Option 10</Menu.Item>
						<Menu.Item key="11">Option 11</Menu.Item>
						<Menu.Item key="12">Option 12</Menu.Item>
					</SubMenu>
				</Menu>
			</div>
		);
	}
}
