import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
 function EditBooks({title,author,description,image,Link,Button}){

  return(
    < ListItem>
   <Row className="title-area">
         <Col size="md-8">
           <h3>{title}</h3>
         </Col>
         <Col size="md-4">
           <div className="btn-container">
       <Link/>
           </div>
      <Button />
         </Col>
       </Row>
       <Row className="author-name">
         <Col size="md-6">
           <p>Written by {author}</p>
         </Col>
       </Row>
       <Row className="books-content">
         <Col size="12 sm-4 md-2">
           <img className="img-thumbnail img-fluid w-100" src={image} alt="this is a placeholder" />
         </Col>
         <Col size="12 sm-8 md-10">
           <p>this is the description:{description}</p>
         </Col>
       </Row>
    
    </ListItem>
 )
}


export default EditBooks;