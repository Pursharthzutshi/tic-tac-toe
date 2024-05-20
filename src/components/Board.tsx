import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { handleOnClick, restartGame } from "./slicers/BoardSlicer";
import "../components/board.css"
import { BoardRow } from "./BoardRow";


export const Board = () => {

    //use selectors 
    const boardState = useAppSelector(((state)=>state.BoardSlicer.board))

    // const player = useAppSelector(((state)=>state.BoardSlicer.player))
    const winner = useAppSelector(((state)=>state.BoardSlicer.winner))
    const isNotWinner = useAppSelector(((state)=>state.BoardSlicer.isNotWinner))

    // dispatch
    const dispatch = useAppDispatch();


    const sendDisptachValues = (indexArgs:any)=>{
        dispatch(handleOnClick(indexArgs))
    }

    return (
        <div className="board">

            <h3>AI Tic Tac Toe Board</h3>
            {
                boardState.map((row:any, rowIndex) => {
                    return (

                            <BoardRow row={row} rowIndex={rowIndex}/>
                    )

                })
            }

             {winner && <p>{winner === "X" ? "You Win" : "AI Wins"}</p>}
 			{isNotWinner && <p> No one wins</p>}

             <button className="reset-button" type="button" onClick={()=>dispatch(restartGame("restart"))}>Restart Button</button>


        </div>
    );
};