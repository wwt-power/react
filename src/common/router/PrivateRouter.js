import React from "react";
// import {Route,Redirect} from "react-router-dom";
import {Route} from "react-router-dom";

const PrivateRouter = ({component:Component, ...rest }) =>{
	return(
		<Route {...rest} render={routeProps =>( <Component {...routeProps} /> )} />
	)
}
export default PrivateRouter;
