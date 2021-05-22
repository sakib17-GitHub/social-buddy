import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const {id} = useParams();
    const [postDetail , setPostDetail] = useState({});
    const [comment , setComment] = useState([]);
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setPostDetail(data))
    } , []);
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setComment(data))
    },[])
    return (
        <div>
            <p>This is post detail : {id}</p>
            <p>Id : {postDetail.id}</p>
            <p>Title : {postDetail.title}</p>
            <p>Body : {postDetail.body}</p>
            <p>Comment count : {comment.length}</p>
            {
                comment.map(comment => <Comment comment={comment}></Comment>)
            }
        </div>
    );
};

export default PostDetail;