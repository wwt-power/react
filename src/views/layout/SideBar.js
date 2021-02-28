import React,{Component} from "react";
// 图片
import figure from "@static/img/figure.png"
// 导入AsideMenu
import AsideMenu from "./AsideMeun.js"


export default class SideBar extends Component {
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
				
				<AsideMenu />
				
			</div>
		);
	}
}
