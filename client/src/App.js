import React,{Component} from "react";
import { BrowserRouter as Router, Route, Switch, Redirect,withRouter} from "react-router-dom";
import Home from "./pages/home"
import Books from "./pages/Books";
import Users from "./pages/Users";
import NoMatch from "./pages/NoMatch";
import {Nav} from "./components/Nav";
import Admin from "./pages/Admin"
import Activity from "./pages/Event"
import Detail from './pages/Detail' // this just to show the book
 import fakeAuth from "./forauth/fakeauth"

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props =>(
      fakeAuth.isAuthenticated
       ? ( <Component {...props} />)
       : (<Redirect to={{
         pathname: '/login',
         state:{from: props.location}
       }}/>
      )
    )
    }
  />
);
const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
);
class Login extends React.Component {
  state = {
    redirectToReferrer: false
  };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };
  render() {
const {redirectToReferrer}=this.state;
const {from}=this.props.location.state ||{from: {pathname:"/"}}

if (redirectToReferrer===true){
  return <Redirect to ={from} />
}
    return (
      <div>
    <p>you must log in to view the page at {from.pathname}</p>
    <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}

// import DetailBook from "./components/Detail"
 class App extends Component {
render(){
  return (
    <Router>
      <div>
        <Nav />
        <AuthButton />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/books/:id" component={Detail}/>
        <Route path="/login" component={Login} />
        <PrivateRoute  path="/users" component={Users}/>
        <Route  path ="/events" component={Activity} />
         <PrivateRoute path="/admins" component={Admin}/>
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
   
  );


}

  
}

export default App;
