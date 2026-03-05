import { useState } from "react";

export default function Form(){
    let[formData,setformData]=useState({
        fullName:"",
        userName:"",
        password:""
    })
 let [fullName,setFullName]=useState("");
  let [userName,setUsername]=useState("");
//  let handleNameChange=(event)=>{
//          setFullName(event.target.value);
//  }
//   let handleUsername=(event)=>{
//          setUsername(event.target.value);
//  }
let handleFormData=(event)=>{
   let fieldName=event.target.name;
   let fieldValue=event.target.value;
    setformData((currData)=>{
      currData[fieldName]=fieldValue;
      return {...currData,[fieldName]:fieldValue};
    }) 
};
let handleSubmit=(event)=>{
    event.preventDefault();
    setformData({
        fullName:"",
        userName:"",
        password:""
    })
}
    return(
            <form onSubmit={handleSubmit}>
          <label htmlFor="fullname"> Fullname </label>
            <input placeholder="Enter your name " type="text" value={formData.fullName} onChange={handleFormData} id="fullname" name="fullName"></input>
            <br></br>
            <br></br>
            <label htmlFor="username"> Username</label>
            <input placeholder="Enter your username " type="text" value={formData.userName} onChange={handleFormData} id="username" name="userName"></input>
             <br></br>
            <br></br>
            <label htmlFor="password"> Username</label>
            <input placeholder="Enter your password " type="password" value={formData.password} onChange={handleFormData} id="password" name="password"></input>
            
        <button>Submit</button>
        </form>
    )
}