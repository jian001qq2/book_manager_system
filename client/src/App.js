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
 import {userApi}from "./utils/Api"
//compoent use when the user login 
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props =>(
      fakeAuth.isAuthenticated? <Component {...props} />
: <Redirect to={{pathname: '/login', state:{from: props.location}
       }}/>
  )}/>
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
    redirectToReferrer: false,
    username:"",
    password:"",
    users:[],//grab all user stored in the database
    admins:[] //grab all administrators in the database
  };
  componentWillMount() {
    this.getUsers()
}
  getUsers() {
    userApi.getUsers()
        .then((res) => {console.log(res.data)
            this.setState({
                users: res.data
            })
        })
}
  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({[name]: value});
};
handleFormSubmit = event => {
    event.preventDefault();
    const inputUser=this.state.username;
    const inputPassword=this.state.password;
    const registedUser=this.state.users

    if (inputPassword && inputUser) {
      for(var i=0;i<registedUser.length; i++){
        if (inputUser===registedUser[i].username && inputPassword ===registedUser[i].password){
          this.login()
        }
      }
            } else{ alert("please fill in all the blank spot")}
       
            }
// the function for the check up or taking the user input to show the page
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
      <div className="row">
      <div className="col-sm-2"></div>
      <div className="col-sm-5">
      <div className="card">
      <div className="card-body">
      <button className="float-right btn btn-outline-primary">Sign up</button>
      <h4 className="card-title mb-4 mt-1">Sign in</h4>
         <form>
          <div className="form-group">
            <label>Your username</label>
              <input name="username" className="form-control" placeholder="Username" type="text"  onChange={this.handleInputChange}/>
          </div> 
          <div className="form-group">
            <label>Your password</label>
              <input  name="password" className="form-control" placeholder="password" type="text"  onChange={this.handleInputChange}/>
          </div> 
          <div className="form-group">
              <button  type="submit"className="btn btn-primary btn-block"onClick={this.handleFormSubmit}> Login  </button>
          </div>
         </form>
         </div>
         </div>
  </div> 
  <div className="col-sm-2"></div>
      </div>
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
