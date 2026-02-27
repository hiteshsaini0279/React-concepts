import { useState } from "react";
export  default function LudoBoard() {
     let [moves, setMoves]= useState({red:0,blue:0,green:0,yellow:0 });
     let updateBlue = () => {
        moves.blue+=1;
        console.log(`moves = ${moves}`);
        setMoves({...moves});
     }
       let updateYellow = () => {
        moves.yellow+=1;
        console.log(`moves = ${moves}`);
        setMoves({...moves});
     }
       let updateRed = () => {
        moves.red+=1;
        console.log(`moves = ${moves}`);
        setMoves({...moves});
     }
          let updateGreen = () => {
        moves.green+=1;
        console.log(`moves = ${moves}`);
        setMoves({...moves});
     }
    return (
        <div>
            Game Begins !!!!
            <div className="ludo">
                <p>Blue color ={moves.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
                <p>Red color ={moves.red}</p>
                <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>
                <p>Green color ={moves.green}</p>
                <button style={{backgroundColor:"green"}} onClick={updateGreen} >+1</button>
                <p>yellow color ={moves.yellow}</p>
                <button style={{backgroundColor:"yellow", color: "black"}} onClick={updateYellow}>+1</button>
            </div>
        </div>
    );
}