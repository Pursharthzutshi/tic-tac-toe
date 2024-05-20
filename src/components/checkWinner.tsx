type BoardArray = Array<Array<string|null>>

export function checkWinner  (board:BoardArray): string | null {
    const lines = [
        //Rows
        [board[0][0], board[0][1], board[0][2]],
        [board[1][0], board[1][1], board[1][2]],
        [board[2][0], board[2][1], board[2][2]],
        //columns
        [board[0][0], board[1][0], board[2][0]],
        [board[0][1], board[1][1], board[2][1]],
        [board[0][2], board[1][2], board[2][2]],

        //Diagonals
        [board[0][0], board[1][1], board[2][2]],
        [board[0][2], board[1][1], board[2][0]],
    ];
  for (const line of lines) {
        const [a, b, c] = line;
        if (a && a === b && a === c) {
            return a; // Return the winner ('X' or 'O')
        }
    }

    // If no winning lines found, return null
    return null;
}
