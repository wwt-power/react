import {Component} from "react"
import cattle from "@static/img/cattle.png"

export default class Welcome extends Component{
	render(){
		return(
			<div className="cattleGoodLuck">
				<img src={cattle} alt="牛年大吉" />
			</div>
		)
	}
}