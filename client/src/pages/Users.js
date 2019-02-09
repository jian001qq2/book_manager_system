import React,{Component} from "react";
import {userApi}from "../utils/Api"
 
class Users extends Component{
   state={
       users:[]
   }

    componentDidMount(){
  this.getUsers()

    }//end of the did mount
    
getUsers(){
 userApi.getUsers()
   .then((res)=>{
       console.log(res.data)
       this.setState({users:res.data})
   })
}
    render(){
        return(
        <div><h1>this is the user page </h1>
   



        </div> //end of the return div
   
        )
    }
}
export default Users;