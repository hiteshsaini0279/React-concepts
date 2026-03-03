import  { useState } from 'react';
import { v4 as uuidv4 } from "uuid";

export default function ToDoList() {

    let [todo, setTodo] = useState([{ task: "sample-task", id: uuidv4(),  isDone: false }]);
    let [newTodo, setNewTodo]= useState("");
 let addTodo = () => {
        setTodo((prevTodos)=>{
            return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false}]
        });
 }
    let updateTodoValue = (event) => {
     setNewTodo(event.target.value);
    }
    let deleteTodo = (id) => {
        setTodo( todo.filter((todo) => todo.id != id ));
    }

    let MarkAllDone=()=>{
         
        setTodo((PrevTodos)=>PrevTodos.map((todo)=>{
            return {
                ...todo,
               isDone:true,
            };
          }))
    }

    let MarkAsDone=(id)=>{
  setTodo((PrevTodos)=>PrevTodos.map((todo)=>{
    if(todo.id === id){
            return {
                ...todo,
               isDone:true,
            };
        }else{
            return todo;
        }
          }));
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
                        <span style={todo.isDone ? {textDecoration:"line-through"}:{}}>{todo.task}</span> 
                        &nbsp;    &nbsp;    &nbsp;    &nbsp;
                        <button onClick={()=>deleteTodo(todo.id)}> Delete</button>
                        <button onClick={()=>MarkAsDone(todo.id)}> Mark As Done</button>
                            </li>
                    ))
                }</ul>
            <br></br>
            <button onClick={MarkAllDone}> Mark All as Done </button>
        </div>
    );
}