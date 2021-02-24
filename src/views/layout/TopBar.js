import {Component,Fragment} from "react";
// logo
import logotxt from "../../static/img/logo_txt.png";
import "./layout.css"

export default class SideBar extends Component{
	render(){
		return(
			<Fragment>
				<div className="topbar-container">
					<dl className="homeHeader">
						<dd>
							<img src={logotxt} />
						</dd>
						<dt>
							<ul className="clear">
								<li>
									123
									// <div className="logPeopleInfo">
									// 	<img src="@assets/static/img/police_portrait.png">
									// 	<div className="logPeopleInfoWord">
									// 		<h5>{{userinfo.gajgMc}}</h5>
									// 		<h6>{{userinfo.realName}}<span style="padding-left: 20px;">{{userinfo.jh}}</span></h6>
									// 	</div>
									// </div>
								</li>
								// <li>
								// 	<div className="homeHeaderOperationBtn" v-on:click="curRefresh">
								// 		<img src="@assets/static/img/home_refresh.png">
								// 		<h4>刷新</h4>
								// 	</div>
								// </li>
								// <li>
								// 	<div className="homeHeaderOperationBtn" @click="loginOut">
								// 		<img src="@assets/static/img/home_exit.png">
								// 		<h4>退出</h4>
								// 	</div>
								// </li>
								// <li>
								// 	<div className="homeHeaderOperationBtn">
								// 		<img src="@assets/static/img/home_help.png">
								// 		<h4>帮助</h4>
								// 	</div>
								// </li>
							</ul>
						</dt>
					</dl>
				</div>
			</Fragment>
		)
	}
}