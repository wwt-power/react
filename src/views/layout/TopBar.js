import {Component,Fragment} from "react";
// logo
import logotxt from "../../static/img/logo_txt.png";
import "./layout.css"
// 图片
import policePortrait from "../../static/img/police_portrait.png"
import refreshIcon from "../../static/img/home_refresh.png"
import exitIcon from "../../static/img/home_exit.png"
import helpIcon from "../../static/img/home_help.png"

export default class SideBar extends Component{
	render(){
		return(
			<Fragment>
				<div className="topbar-container">
					<dl className="homeHeader clearfix">
						<dd>
							<img src={logotxt}  alt="logotxt" />
						</dd>
						<dt>
							<ul className="clearfix">
								<li>
									<div className="logPeopleInfo clearfix">
										<img src={policePortrait} alt="头像" />
										<div className="logPeopleInfoWord">
											<h5>三角城派出所</h5>
											<h6>超级管理员<span>admin</span></h6>
										</div>
									</div>
								</li>
								<li>
									<div className="homeHeaderOperationBtn">
										<img src={refreshIcon} alt="刷新" />
										<h4>刷新</h4>
									</div>
								</li>
								<li>
									<div className="homeHeaderOperationBtn">
										<img src={exitIcon} alt="退出" />
										<h4>退出</h4>
									</div>
								</li>
								<li>
									<div className="homeHeaderOperationBtn">
										<img src={helpIcon} alt="帮助" />
										<h4>帮助</h4>
									</div>
								</li>
							</ul>
						</dt>
					</dl>
				</div>
			</Fragment>
		)
	}
}