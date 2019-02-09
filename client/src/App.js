import React,{Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home"
import Books from "./pages/Books";
import Users from "./pages/Users";
import NoMatch from "./pages/NoMatch";
import {Nav} from "./components/Nav";
import Admin from "./pages/Admin"
import Activity from "./pages/Event"
import Detail from './pages/Detail' // this just to show the book
// import DetailBook from "./components/Detail"
 class App extends Component {
render(){
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/books/:id" component={Detail}/>
        <Route  path="/users" component={Users}/>
        <Route  path ="/events" component={Activity} />
         <Route  path="/admins" component={Admin}/>
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
   
  );


}

  
}

export default App;
