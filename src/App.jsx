
import './App.css'
import LudoBoard from './LudoBoard';
import ToDoList from './ToDoList';
import Lottery from './Lottery';
import Ticket from './Ticket';
function App() {
  return (
    <>
    {/* <ToDoList /> */}
<Lottery n={3} winningSum={15} />
{/* <Ticket ticket={[1,2,3]}/>
<Ticket ticket={[1,2,23,34,3]}/> */}

    </>
  )
}

export default App
