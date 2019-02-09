import React,{Component} from "react";
 
import { Col, Row, Container } from "../../components/Grid";
import{List,ListItem}from "../../components/List"
import {userApi} from "../../utils/Api"
class AllUser extends Component{
    constructor(){
        super();
        this.state={
          users:[],
          firstName: "",
          lastName: "",
          email: " ",
          username:"",
           password: "",
          advanced:""
          }
      }
      
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


    render(){
return(
    <Container fluid>
    <Row>
      <Col size="sm-10">
           <List>
               {this.state.users.map((user)=>{
                   return<ListItem key={user.id}>
                   <Row>
                       <Col size="sm-2">  <p>full name : {user.firstName} {user.lastName}</p></Col>
                       <Col size="sm-2">  <p> email : {user.email}</p></Col>  
                       <Col size="sm-2">  <p>username : {user.username}</p></Col> 
                        <Col size="sm-2">  <p>password : {user.password}</p></Col>  
                        <Col size="sm-2"><p>signed in?: {user.signedIn.toString()}</p></Col>
                    </Row>
                   </ListItem>
               })}
               
           </List>
      </Col>
      </Row>
      <Row>
      <Col size="sm-2">
      {/* <p>add the user</p>
        <form>
            <br/>
          first name
            <input type="text" name="firstname"  value={this.state.firstname}
                onChange={this.handleInputChange}
                placeholder="firstname (required)"/>
                <br/>
           last name: <input type="text" name="lastname"value={this.state.lastname}
                onChange={this.handleInputChange}
                placeholder="lastname(required)"/>
                <br/>
            <input type="text" name ="username"value={this.state.username}
                onChange={this.handleInputChange}
                placeholder="username"/>
                <input type="text" name ="email" value={this.state.email} onChange={this.handleInputChange}
                placeholder="email"/>
                <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange}
                placeholder="username"/>
                 <input type="text" name="password" value={this.state.password} onChange={this.handleInputChange}
                placeholder="password"/>
                <button onClick={this.handleFormSubmit}> submit</button>
        </form> */}

      </Col>
    </Row>
  </Container>
)
    }
}
export default AllUser;