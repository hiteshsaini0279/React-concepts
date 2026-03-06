import { useState } from "react";
import "./Comment.css";
import CommentsForm from "./CommentsForm";
export default function Comment(){ 
    let [comments, setComments]=useState([{
        username:"@John02",
        Comment:"This is a comment",
        rating:4
    }]);
    let addComment=(comment)=>{
        setComments((currComments)=> [...currComments, comment]);
        };
    return(
        <>
        <div>
            <h3>Comments </h3>
            {comments.map((comment, index)=>(
  <div className="comment" key={index}>
            <span>{comment.Comment}</span>
            &nbsp; 
            <span>( rating={comment.rating})</span>
                &nbsp;
                <p> -{comment.username}</p>
            </div>
            ))}
            </div>
            <hr></hr>
            <CommentsForm addComment={addComment}/>
            </>)
           
}