import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Route, BrowserRouter, Switch } from 'react-router-dom';


const Contents=()=>{
    const url='https://jsonplaceholder.typicode.com/users'
    const[content,setContent]=useState(null)
    

    useEffect(()=>{
        axios.get(url)
    .then(response=>{
        setContent(response.data)
    })

    },[url])
    if (content) {
        return(
            <div>
                 {content.name} 
            </div>
        );
        
    }



}




export default Contents;