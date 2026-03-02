import  { useState } from 'react';
import { v4 as uuidv4 } from "uuid";

export default function ToDoList() {

    let [todo, setTodo] = useState([{ task: "sample-task", id: uuidv4() }]);
    let [newTodo, setNewTodo]= useState("");
 let addTodo = () => {
        setTodo((prevTodos)=>{
            return [...prevTodos, { task: newTodo, id: uuidv4() }]
        });
 }
    let updateTodoValue = (event) => {
     setNewTodo(event.target.value);
    }
    let deleteTodo = (id) => {
        setTodo( todo.filter((todo) => todo.id != id ));
    }

    let UpperCaseAll=()=>{
         
        setTodo(todo.map((todo)=>{
            return {
                ...todo,
                task: todo.task.toUpperCase(),
            };
          }))
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
                         <li key={todo.id}>
                        <span>   {todo.task}</span> 
                        &nbsp;    &nbsp;    &nbsp;    &nbsp;
                        <button onClick={()=>deleteTodo(todo.id)}> Delete</button>
                            </li>
                    ))


                }</ul>
            <br></br>
            <button onClick={UpperCaseAll}> UpperCase ALl</button>


        </div>
    )
}