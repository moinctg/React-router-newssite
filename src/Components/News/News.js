import 'bootstrap/dist/css/bootstrap.min.css';

import {  Card,Col } from 'react-bootstrap';
import {
 useHistory
}
 from "react-router-dom";

import React from 'react';

const News = (props) => {
  const history = useHistory();

  console.log(props.news)
  
  const { id, name, username,email,address} = props.news;
  const handleClick=()=>{
    history.push(`/news/${id}`);
  }

    return (
        <div>

<Col>
     
      <Card>
        <h2>ID: {id} </h2>
        <Card.Img variant="top" src=""/>
        <h3>Name: {name}</h3>
        <Card.Body>
          <Card.Title>Username:{username}</Card.Title>
          {/* <h5> Author: </h5> */}
          <Card.Text>
           Email: {email}
          </Card.Text>
          <h3>City: {address.city} </h3>
        </Card.Body>
      </Card>
    </Col>
    {/* <Link to ={`news/${id}`}>See more</Link> */}
    <button onClick={handleClick}>See more</button>
            
        </div>
    );
};

export default News;