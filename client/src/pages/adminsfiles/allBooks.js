import React,{Component} from "react";
 
import {bookApi}from "../../utils/Api";
import { Col, Row, Container } from "../../components/Grid";
import {List}from "../../components/List"
import { Link } from "react-router-dom";
import EditBooks from "../../components/Books" 
class AllBook extends Component {
    constructor() {
        super();
        this.state = {
            books: [],
            title: "",
            author: "",
            description: "",
            image: "",
            total: ""
        };
    }
    componentWillMount() {
        this.getBooks()
    }

    getBooks() {
        bookApi.getBooks()
            .then((res) => {
                this.setState({
                    books: res.data
                })
            })
    }
    delete = (id) => {
        bookApi.deleteBook(id).then((res) => {
                console.log("deleted the id of book", res.data)
            }).then(() => this.getBooks())
            .catch(err => {
                console.log(err)
            })

    }

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };
    handleFormSubmit = event => {
        event.preventDefault();
        //if data exist then update that into database 
        if (this.state.title && this.state.author) {
            bookApi.addBook({
                    title: this.state.title,
                    author: this.state.author,
                    description: this.state.description,
                    image: this.state.image||"https://via.placeholder.com/200",
                    total: this.state.total||1
                })
                .then(res => {
                    this.setState({
                        title: "",
                        author: "",
                        description: "",
                        image: "",
                        total: ""
                    })
                    this.getBooks()
                })
                .catch(err => console.log(err));
        }
    }



    render() {
            return (
    <Container fluid>
    <Row>
      
      <Col size="sm-10">
      <List>
{this.state.books.map((book)=>{
   return  <EditBooks
    key={book.id}
    title={book.title}
    author={book.author}
    description={book.description}
    image={book.image}
    Link={()=>{
       return  <Link to={"/books/" + book.id}><span><button>View</button></span></Link>
    }}
    Button={() => {
   return <button onClick={() => {this.delete(book.id)}} >Delete</button>
    }}
  />
     
          })}
  </List>
</Col>
<Col size="sm-2">
<p>add the book</p>
        <form>
            <br/>
           Title
            <input type="text" name="title"  value={this.state.title}
                onChange={this.handleInputChange}
                placeholder="title (required)"/>
                <br/>
           Author: <input type="text" name="author"value={this.state.author}
                onChange={this.handleInputChange}
                placeholder="author(required)"/>
                <br/>
                category <select>
  <option value="1" name="categoryId" >fiction</option>
  <option value="2"name="categoryId">non-fiction</option>

</select>
            <textarea type="text" name ="description"value={this.state.description}
                onChange={this.handleInputChange}
                placeholder="description"/>
                <input type="text" name ="image" value={this.state.image} onChange={this.handleInputChange}
                placeholder="image url"/>
                <input type="text" name="total" value={this.state.total} onChange={this.handleInputChange}
                placeholder="book's quantity"/>
                <button onClick={this.handleFormSubmit}> submit</button>
        </form>
      </Col>
      
    </Row>
  </Container>
)
}
}
export default AllBook;