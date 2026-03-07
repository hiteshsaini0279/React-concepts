import {useState} from 'react';
import { useFormik } from 'formik';

 const validate = values => {
   const errors = {};
   if (!values.username) {
     errors.username = 'username must be required';
   } else if (values.username.length > 15) {
     errors.username = 'Must be 15 characters or less';
   }
 
 
   return errors;
 };
export default function CommentsForm({addComment}) {
    // let [FormData, setFormData]=useState({
    //     username:"",
    //     Comment:"",
    //     rating:5
    // });
       const formik = useFormik({
     initialValues: {
       username: '',
       Comment: '',
       rating: 5,
     },
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });
    // let handleChange=(event)=>{
    //     setFormData((currData)=>{
    //         return {...currData, [event.target.name]: event.target.value};
    //     });
    // };
    // let handleSubmit=(event)=>{
    //     console.log(FormData);
    //     addComment(FormData);
    //     event.preventDefault();
    // };
    return(
        <div>
            <h4>Give a Comment !! </h4>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor='username'> Username</label>
                <input placeholder="username" type="text" value={formik.values.username}     onChange={formik.handleChange} id='username' name='username'/>
                 {formik.errors.username ? <div>{formik.errors.username}</div> : null}
                <br></br> <br></br>
                <label htmlFor='Comment'> Comments</label>
                <textarea placeholder="Comment" rows="2" value={formik.values.Comment}     onChange={formik.handleChange}id='Comment' name='Comment'>Remarks</textarea>
                <br></br> <br></br>
                <label htmlFor='rating'> Rating</label>
                <input placeholder="rating" type="number" min={1} max={5} value={formik.values.rating}     onChange={formik.handleChange} id='rating' name='rating'/>
                <br></br> <br></br>
                <button type="submit" >ADD A COMMENT</button> 
            </form>
        </div>
    ); 
}