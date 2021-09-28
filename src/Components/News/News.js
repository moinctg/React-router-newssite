import 'bootstrap/dist/css/bootstrap.min.css';

import {  Card,Col } from 'react-bootstrap';

import React from 'react';

const News = (props) => {

  // console.log(props.api)
  
  const {author, title ,description ,urlToImage} = props.news ;
    return (
        <div>

<Col>
     
      <Card>
        <Card.Img variant="top" src={ urlToImage }/>
        <Card.Body>
          <Card.Title>Card title:{title}</Card.Title>
          <h5> Author: {author}</h5>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
            
        </div>
    );
};

export default News;