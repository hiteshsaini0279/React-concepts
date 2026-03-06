import {useState} from 'react';

export default function CommentsForm({addComment}) {
    let [FormData, setFormData]=useState({
        username:"",
        Comment:"",
        rating:5
    });
    let handleChange=(event)=>{
        setFormData((currData)=>{
            return {...currData, [event.target.name]: event.target.value};
        });
    };
    let handleSubmit=(event)=>{
        console.log(FormData);
        addComment(FormData);
        event.preventDefault();
    };
    return(
        <div>
            <h4>Give a Comment !! </h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'> Username</label>
                <input placeholder="username" type="text" value={FormData.username} onChange={handleChange} id='username' name='username'/>
                <br></br> <br></br>
                <label htmlFor='Comment'> Comments</label>
                <textarea placeholder="Comment" rows="2" value={FormData.comment} onChange={handleChange} id='Comment' name='Comment'>Remarks</textarea>
                <br></br> <br></br>
                <label htmlFor='rating'> Rating</label>
                <input placeholder="rating" type="number" min={1} max={5} value={FormData.rating} onChange={handleChange} id='rating' name='rating'/>
                <br></br> <br></br>
                <button >ADD A COMMENT</button> 
            </form>
        </div>
    ); 
}