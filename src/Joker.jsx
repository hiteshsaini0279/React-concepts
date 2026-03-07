import { useState } from "react";
export default function Joker() {
    let [joke,setJoke]=useState({});
    const URL = "https://official-joke-api.appspot.com/random_joke";

    const getNewJoke= async()=>{
        let  response =  await fetch(URL);
     let jsonresponse= await response.json();
 console.log(jsonresponse);
        setJoke({setup:jsonresponse.setup,punchline:jsonresponse.punchline});
    }
    return(
        <div>
            <h3>Joker !</h3>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={getNewJoke}>Get New Joke</button>
        </div>
    );
};