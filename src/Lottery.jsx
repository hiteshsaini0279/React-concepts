import { useState } from "react";
import "./Lottery.css";
import {genTicket,sum} from "./helper";
export default function Lottery() {
    let [ticket, setTicket] = useState(genTicket(3));
    let isWinning=sum(ticket) === 15;
    let BuyAticket=()=>{
        setTicket(genTicket(3));
    }
    return(
        <div>
            <h1>Lottery Game !!!</h1>
            <div className="ticket" >
                <span>{ticket[0]}</span>
                  <span>{ticket[1]}</span>
                    <span>{ticket[2]}</span>
            </div>
            <button onClick={BuyAticket}>Generate A Ticket</button>
            <h3>{isWinning && "congratulation!!! you have won... "}</h3>
        </div>
    );
}