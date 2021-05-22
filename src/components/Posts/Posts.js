import React from 'react';
import { useHistory } from 'react-router';

const Posts = (props) => {
    const {id , title , body} = props.post;
    const history = useHistory();
    const showComment = id =>{
        const url = `post/${id}`;
        history.push(url);
    } 
    return (
        <div>
             <h2><strong> Id : {id}</strong> {title}</h2>
             <p>{body}</p>
             <button style={{cursor: 'pointer'}} onClick={()=> showComment(id)}>Show Comments</button>
        </div>
    );
};

export default Posts;