# Initial Notes
Things to think about: Tic-Tac-Toe
1. Dynamically Build UI
2. class TicTacToe
        let ttt = new TicTacToe(),
            contructor ---->
3.  _________________   Bootstrap?
   |     |     |     |     Roles & Responsibilities
   |_____|_____|_____|     class Tile data?
   |     |     |     |     class TicTacToe
   |_____|_____|_____|
   |     |     |     |
   |_____|_____|_____|


Classes?
    Board/Grid
    "Blocks"

# Pseudocode

## Game/Match/Grid Class
class TicTacToe

### Model
    constructor()
        gameState? - boolean; true? why does game need to be active/not active?
        matchNum - int; 0
        turnNum - int; 0
        playerTurn - int; 0
        grid - array; 1d or 2d of 0s
            - [0, 0, 0, 0, 0, 0, 0, 0, 0]
            - or [ [0, 0, 0],
                   [0, 0, 0],
                   [0, 0, 0] ]
        player1Name - str; null
        player2Name - str; null
        player1Score - int; 0
        player2Score - intl 0


### View
    generateHTML
        ** work on this after logic? **
### Controller
    nextMatch()
        increment matchNum by 1
    nextTurn()
        increment turnNum by 1
    playerTurn(turnNum)
        based on turn number, whose turn is it
    setPlayer1()
        take HTML input to set player1Name
    setPlayer2()
        same as setPlayer1, maybe merge and take argument?
    checkWin()
        check grid (maybe only after 5th turn?) against possible win conditions
        win conditions are win a row/column/diagonal adds up to 3 or -3
        - in 1d, win conditions are

            grid[0] + grid[1] + grid[2] = 3 or -3
               +         +         +
            grid[3] + grid[4] + grid[5] = 3 or -3
               +         +         +
            grid[6] + grid[7] + grid[8] = 3 or -3
               =         =         =
            3 or -3   3 or -3   3 or -3

            or

            grid[0] + grid[4] + grid[8] = 3 or -3
            grid[2] + grid[4] + grid[6] = 3 or -3

    assignBlock()
        set element in grid to 1 or -1 based on playerTurn/turnNum?




    

