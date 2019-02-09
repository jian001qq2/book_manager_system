import React, {Component} from "react";
import {Col,Row, Container} from "../components/Grid"
import Jumbotron from "../components/Jumbotron"
 
class Home extends Component {
  state = {
    books: [],
    q: "",
    message: "Search For A Book To Begin!"
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

    render(){
return(
    <Container fluid>
   <Row>
     <Col size="sm-12">
     <Jumbotron>
       <h1>hello , welcome to the home page </h1>
       </Jumbotron>
       </Col>

   </Row>
    <Row>
      <Col size="sm-3">
      something like intro or else 
      </Col>
      <Col size="sm-8">
      <pre>show something good </pre>
      </Col>
      
    </Row>
  </Container>
)
}
}
export default Home;