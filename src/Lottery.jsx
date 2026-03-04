import { useState } from "react";
import "./Lottery.css";
import {genTicket,sum} from "./helper";
import Ticket from "./Ticket";
export default function Lottery({n=3, winningSum=15}) {
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning=sum(ticket) === winningSum;
    let BuyAticket=()=>{
        setTicket(genTicket(n));
    }
    return(
        <div>
            <h1>Lottery Game !!!</h1>
            <Ticket ticket={ticket}/>
            <button onClick={BuyAticket}>Generate A Ticket</button>
            <h3>{isWinning && "congratulation!!! you have won... "}</h3>
        </div>
    );
}