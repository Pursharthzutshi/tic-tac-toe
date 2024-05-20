import { createSlice } from "@reduxjs/toolkit";
import { getCleverMoves } from "../util";
import { checkWinner } from "../checkWinner";
const initialBoard = Array.from({length:3},()=>Array.from({length:3},()=>null));

// const initialBoard = [[]]


interface stateBoardProps {
    board : Array<Array<string|null>>
    player: string;
    winner: string | null;
    isNotWinner: boolean;
}


const initialState  ={
    board:initialBoard,
    player:"X",
    winner:null,
    isNotWinner:false
}

const boardSlicer = createSlice({
    name:"Board",
    initialState,
    reducers:{
        handleOnClick:(state:stateBoardProps,action)=>{
            if(state.board[action.payload.rowIndex][action.payload.cellIndex] || state.winner){
                return;
            }
    
            //playerMove
    
            const updatedPlayerBoard = state.board.map((newRow,rowIndex)=>{
                return newRow.map((cell,cellIndex)=>{
                   return rowIndex === action.payload.rowIndex && cellIndex === action.payload.cellIndex ? state.player:cell
                })
            })

            console.log(state.player)
    
            console.log(updatedPlayerBoard)

            state.board = updatedPlayerBoard
            const playerMove = checkWinner(updatedPlayerBoard)
            state.winner = playerMove
            // setWinner(playerMove)
            state.player = "X"
    
            //Now Winner
    
            const hasNullValue = updatedPlayerBoard.some((row)=>row.some((cell=>cell === null)))
    
            if(!state.winner && !hasNullValue){
                state.isNotWinner = true
                return;
            }
     
            //computer Move
    
            if(!playerMove){
            
                const nextPlayerMove = state.player === "X" ? "O":"X"
                const bestMove = getCleverMoves(updatedPlayerBoard,nextPlayerMove,checkWinner)
            // const [computerRow,computerCol] = makeComputerMove(updatedPlayerBoard);
          
            const aiBoard = updatedPlayerBoard.map((r,rowIndex)=>{
                return r.map((c,colIndex)=>{
                    return rowIndex === bestMove?.[0] && colIndex === bestMove[1] ? nextPlayerMove :c
                })
            })

            
            state.board = aiBoard;
            // setTimeout(()=>{
                // setWinner(checkWinner(aiBoard));
        
            // },200)
    
            }
    
        },
        restartGame:(state,action)=>{
            state.board = initialBoard
            state.player = "X"
            state.winner = null
            state.isNotWinner = false
        }
    }
})


export const {handleOnClick,restartGame} = boardSlicer.actions;

export default boardSlicer.reducer