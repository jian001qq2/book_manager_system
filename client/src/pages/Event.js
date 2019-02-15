import React,{Component} from "react";
import {eventApi}from "../utils/Api";

import { Col, Row, Container } from "../components/Grid";
import{List,ListItem}from "../components/List"
class Activity extends Component{
    constructor() {
        super();
        this.state = {
            events: [],
      
        };
    }

componentDidMount(){
    this.getEvents()
  
      }

 getEvents(){
   eventApi.getEvents()
   .then((res)=>{
       console.log(res)
       this.setState({events:res.data})
   })
}
 
 
    render(){
        return(
            <Container fluid>
            <Row>
              
              <Col size="sm-10">
              <List>
                       {this.state.events.map((event)=>{
                           return<ListItem key={event.id}>
                           <Row>
                               <Col size="sm-2">  <p>event name : {event.eventtName}</p></Col>
                               <Col size="sm-2">  <p> summary : {event.summary}</p></Col>  
                               <Col size="sm-2">  <p>event time : {event.eventTime}</p></Col> 
                                <Col size="sm-2">  <p>location : {event.location}</p></Col>  
                                <Col size="sm-2"><p>max number: {event.maxNumber}</p></Col>
                            </Row>
                           </ListItem>
                       })}
                       
                   </List>
              </Col>
              
            </Row>
          </Container>
        )
    }
}
export default Activity;