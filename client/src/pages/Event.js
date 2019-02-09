import React,{Component} from "react";
import {eventApi}from "../utils/Api";
//  import {Row,Col}from"../components/Grid"
// import {List}from "../components/List"
// import Card from "../components/Card"
 
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
        <div><h1>this is the book page </h1>
       
 
        </div> //end of the return div
   
        )
    }
}
export default Activity;