import 'bootstrap/dist/css/bootstrap.min.css';

import { Row } from 'react-bootstrap';
import News from '../News/News'

import React, { useEffect, useState } from 'react';

const API = () => {

    const [news,setNews] = useState([])

    useEffect( ()=>{
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-28&sortBy=publishedAt&apiKey=2f6c5a823ad04c6c908baf3bdd6f9e0e')
        .then(res=>res.json())
        .then(data=>setNews(data.articles))
    }
        ,[])
    return (
        <div>
            

            <Row xs={1} md={3} className="g-4">
               
                {
                    news.map(nu =><News news={ nu }></News>)
                }

                       </Row>
        </div>
    );
};

export default API;