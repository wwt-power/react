import {Component,Fragment} from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import "@static/style/reset.css"
import "@static/style/cattle.css"
import Loagin from "@views/login/Login"
import Home from "@views/page/home/Home"
import Welcome from "@views/Welcome"
import Index from "@views/layout/Index"

class App extends Component{
  render(){
    return(
      <Fragment>
        <BrowserRouter>
          <Switch>
			<Route exact path="/" component={Index} />
            <Route exact path="/welcome" component={Welcome} />
            <Route path="/home" component={Home} />
            <Route path="/login" component={Loagin} />
          </Switch>  
        </BrowserRouter>
      </Fragment>  
    )
  }
}
export default App;
