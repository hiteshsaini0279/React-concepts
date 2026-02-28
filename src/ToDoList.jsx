import  { useState } from 'react';

export default function ToDoList() {

    let [todo, setTodo] = useState([""]);
    let [newTodo, setNewTodo]= useState("");
 let addTodo = () => {
        setTodo([...todo, newTodo]);
 }
    let updateTodoValue = (event) => {
     setNewTodo(event.target.value);
    }
    return (
        <div>
          
            <input placeholder="Add a task" valur={newTodo} onChange={updateTodoValue}></input>
            <br></br>
            <button onClick={addTodo}> Add a task </button>
            <br></br>
            <br></br>
            <br></br>

            <hr></hr>
            <h4> To Do List </h4>
                <ul> {

                    todo.map((todo) => (
                         <li>{todo}</li>


                    ))


}</ul>
        </div>
    )
}