import React from "react";
import {Route, Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import AllBooks from "./adminsfiles/allBooks"
import AllEvents from "./adminsfiles/allEvents"
import AllUsers from "./adminsfiles/allUser"
function Admin({match}){
    return(
        <Container fluid>
        <Row>
             <Col size="sm-2">
            <ul  className="nav flex-column">
  <li  className="nav-item">
    <Link to={`${match.url}`}  className="nav-link" >admin page</Link>
  </li>
  <li  className="nav-item">
    <Link to={`${match.url}/books`}className="nav-link" >manage book</Link>
  </li>
  <li  className="nav-item">
  <Link to ={`${match.url}/users`}className="nav-link" >manage User</Link>
  </li>
  <li  className="nav-item">
    <Link to={`${match.url}/events`} className="nav-link">manage event</Link>
  </li>
</ul>
              </Col>
              <Col size="sm-8">
              <Route path ={`${match.url}/:groupId`} component={grouppage}/>
            <Route exact path={match.url} render={adminMainPage} />
              </Col>
        
            </Row>
          </Container>
        );
    }
let grouppage=({match},cb)=>{
  switch (match.params.groupId) {
    case "books":
 return <AllBooks/>
      case "events":
    return <AllEvents />
      case "users":
    return <AllUsers/>
    default:
    return <Admin/>
  }
 
    
    
  }
const adminMainPage=()=>(
  
    <div><h2>hello i am the main page of the administrator</h2></div>
)
export default Admin;