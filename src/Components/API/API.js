import 'bootstrap/dist/css/bootstrap.min.css';

import { Row } from 'react-bootstrap';
import News from '../News/News'

import React, { useEffect, useState } from 'react';

const API = () => {

    const [news,setNews] = useState([]);

    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setNews(data))
    }
        ,[])
    return (
        <div>
            

            <Row xs={1} md={3} className="g-4">
               
                {
                    news.map(nu =><News 
                        // key={nu.id}
                        news={ nu }></News>)
                }

                       </Row>
        </div>
    );
};

export default API;