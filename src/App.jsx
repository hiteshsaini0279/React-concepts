
import './App.css'
import LudoBoard from './LudoBoard';
import ToDoList from './ToDoList';
import Lottery from './Lottery';
import Ticket from './Ticket';
import {sum} from "./helper";
import Form from './Form';
import CommentsForm from './CommentsForm';
import Comment from './Comment';
import Counter from './Counter';
function App() {
  let WinnCondition=(ticket) =>{
     return ticket.every((num)=>num===ticket[0]);
  }
  return (
    <>
    {/* <ToDoList /> */}
{/* <Lottery n={3} WinnCondition={WinnCondition} /> */}
{/* <Ticket ticket={[1,2,3]}/>
<Ticket ticket={[1,2,23,34,3]}/> */}
{/* <Form /> */}
{/* <CommentsForm /> */}
{/* <Comment /> */}
<Counter />
    </>
  )
}

export default App
