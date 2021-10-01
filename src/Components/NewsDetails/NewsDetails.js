
import React from 'react';

import react, {useEffect,useState} from 'react';
import  {useParams} from 'react-router-dom';

const NewsDetails = () => {
    const {id} = useParams();
    const [user,setUser] = useState({});
    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/photos/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setUser(data));
    }
        ,[])
    
    return (
        <div>
            <h3>This is Details Sections:{id} </h3>
            <h1>User Details </h1>
            <h4>AlbumID:{user.albumId}</h4>
            <h4>Title:{user.title}</h4>
            <h4>url:{user.url}</h4>
            <h4>Image:{user.thumbnailUrl}</h4>
        </div>
    );
};

export default NewsDetails;