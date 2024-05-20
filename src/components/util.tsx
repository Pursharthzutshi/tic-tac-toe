
export const getCleverMoves = (Board:Array<Array<string|null>>,player:string,checkWinner:(Board:Array<Array<string|null>>)=>string|null) =>{

    const cleverMoves:Array<[number,number]> = []

    // useEffect(()=>{
    //     console.log(cleverMoves)
    // })

    //check wining mover

    Board.map((row,rowIndex)=>{
        return row.map((col,colIndex)=>{
             if(!Board[rowIndex][colIndex]){
                const clonedBoard = Board.map((r)=>{
                    return [...r]
                })

                clonedBoard[rowIndex][colIndex] = player
       
                if(checkWinner(clonedBoard) === player){
                    cleverMoves.unshift([rowIndex,colIndex])
                }
            }
        })
    })

    //oponent moves

    const opponent = player === "X" ? "O" : "X"

    Board.some((row,rowIndex)=>row.some((col,colIndex)=>{
        if(!Board[rowIndex][colIndex]){
            const clonedBoard = Board.map((r:any)=>{
                return [...r]
            })

            clonedBoard[rowIndex][colIndex] = opponent;

            if(checkWinner(clonedBoard) === opponent){
                cleverMoves.push([rowIndex,colIndex])
                return true;
            }
            return false;


        }
                    
    if(cleverMoves.length > 0){
        return cleverMoves[0]
    }

    }))

    //choose the center cell

    if(!Board[1][1]){
        return [1,1]
    }

    //random move

    const emptyCells:Array<[number,number]> = []

    Board.map((row,rowIndex)=>{
        return row.map((col,colIndex)=>{
            if(!Board[rowIndex][colIndex]){
                emptyCells.push([rowIndex,colIndex])
            }
        })
    })

   const randomCell = Math.floor(Math.random() * emptyCells.length)
   
   return emptyCells[randomCell]
}