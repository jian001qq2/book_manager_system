import React,{Component} from "react";
import {bookApi}from "../utils/Api";
 import {Row,Col}from"../components/Grid"
import {List}from "../components/List"
import Card from "../components/Card"
import EditBooks from "../components/Books" 
import { Link } from "react-router-dom";
class Books extends Component{
    constructor() {
        super();
        this.state = {
            books: [],
            title:"",
            author:"",
            description:"",
            image:"",
        };
    }
componentWillMount(){
  this.getBooks()

    }

getBooks(){
   bookApi.getBooks()
   .then((res)=>{
       console.log(res)
       this.setState({books:res.data})
   })
}
getOne(id){
    bookApi.getBook(id).then((res)=>{
     console.log("find one with id ",res.data)
    })
}

 try(){
     console.log("plan to update the book's save state in the database to true")
 }
    render(){
        return(
        <div><h1>this is the book page </h1>
        <Row>
 
        <Col size="md-12">
        <Card>
                <List>
{this.state.books.map((book)=>{
   return  <EditBooks
    key={book.id}
    title={book.title}
    author={book.author}
    description={book.description}
    image={book.image}
    Link={()=>{
       return  <Link to={"/books/" + book.id}>
        <strong>
         view
        </strong>
      </Link>
    }}
    Button={() => (
      <button
        onClick={() => {
            this.try()}}

      >
        try to save to a list 
      </button>
    )}
  />
     
          })}
  </List>
  </Card>  
        </Col>
        </Row>
    
{/*this is try to list all the book got from the database that was set in the state */}

        </div> //end of the return div
   
        )
    }
}
export default Books;