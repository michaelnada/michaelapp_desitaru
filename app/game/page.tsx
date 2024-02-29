"use client"

import { FC, useState } from "react"
type Arraytype = Array<"X"|"O"|undefined>
export default function Game() {
    const [xIsNext, setXIsNext] = useState<boolean>(true);
    const [history, setHistory] = useState<Array<Array<"X"|"O"|undefined>>>([Array(9).fill(undefined)]);
    const currentSquares = history[history.length - 1];
    function handlePlay(nextSquares:Array<"X"|"O"|undefined>) {
        setHistory([...history, nextSquares]);
        setXIsNext(!xIsNext);
    }
    function jumpTo(nextMove:number) {
        // TODO
    }
    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
        description = 'Go to move #' + move;
        } else {
          description = 'Go to game start';
        }
        return (
          <li key={move}>
            <button onClick={() => jumpTo(move)}>{description}</button>
          </li>
        );
  });
    return (
      <div className="game">
        <div className="game-board">
          <Board xIsNext={xIsNext} squares={currentSquares}
           onPlay={handlePlay}/>
        </div>
        <div className="game-info">
          <ol>{/*TODO*/}</ol>
        </div>
      </div>
    );
  }
type BoardProps = {
    xIsNext:boolean, 
    squares:Array<"X"|"O"|undefined>, 
    onPlay:(nextSquares:Arraytype)=>void
}
const Board:FC<BoardProps>= ({xIsNext,squares,onPlay}) => {
    function handleClick(i:number) {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
          } else {
            nextSquares[i] = "O";
        }
        onPlay(nextSquares);
    }
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (xIsNext ? "X" : "O");
    }
    return(<main>
        <div className="">{status}</div>
        <div className="flex flex-col">
            <div className="flex ">
            <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
            <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
            <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
            </div>
            <div className="flex">
            <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
            <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
            <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
            </div>
            <div className="flex">
            <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
            <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
            <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
            </div>
        </div>
        
        
    </main>)
}

type CellProps={
    value?: string
    onSquareClick: ()=>void
}

const Square:FC<CellProps>=({value,onSquareClick})=>{
    return(<div className="
     ">
       <button onClick={onSquareClick}
       className ="
       border border-1 w-[100px] h-[100px] 
         font-bold text-8xl text-orange-700 flex">
            <div className = "">
                {value}
            </div>
           
        </button>
   </div>)
}

function calculateWinner(squares:Array<"X"|"O"|undefined>){
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for(let i = 0;i<lines.length;i++){
        const[a,b,c] = lines[i];
        if(squares[a] && squares[a] === squares[b] 
            && squares[a] === squares[c]){
                return squares[a];
        }
    }


    return undefined;
}
