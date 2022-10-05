import React,{useState} from 'react';
import Board from './Board';
import { calculateWinner } from '../helper';
import './Game.css'
const Game = () => {
        const[board,setBoard]=useState(Array(9).fill(null))
        const[xIsext,setXIsext]=useState(true)
        const winner=calculateWinner(board)

        const handleClick=(index)=>{
            const boardCopy=[...board]
            //определить был ли клик по ячейке или игра закончена
            if (winner|| boardCopy[index]) return 
            //Определить чей ход х?о

            boardCopy[index]=xIsext ? 'X' : 'O'
            //обновитьнаш стейт
            setBoard(boardCopy)
            setXIsext(!xIsext)
                
            
        }
        const startNewGame=()=>{
            return(
                <button className="start_btn" onClick={()=>setBoard(Array(9).fill(null))}>Cleaner all </button>
            )
        }

    return (
        <div className="wrapper">
            {startNewGame()}
            <Board squares={board} click={handleClick}/>
            <p className="game_info">
                {winner ? 'Победитель'+ winner: 'Сейчас ходит '+(xIsext ? 'X':'O')}
            </p>
        </div>
    );
}

export default Game;


