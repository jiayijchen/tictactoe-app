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

## Summary
Objects:

- TicTacToe (the app)
    - Model: 
        - number of rounds
        - tracks first turn
    - View:
        - displays title? (may just make in HTML
        - displays reset button
    - Controller:
        - button to reset stats 
        - calls for new Players
        - calls for new Rounds

- Player (each player; child of TicTacToe?)
    - Model:
        - tracks player name
        - tracks player score
    - View:
        - displays and updates player name on entry
        - displays and updates player score every win
    - Controller:
        - update player score each win
        - update name when inputted

- Round (Board/Match/Grid; child of TicTacToe?)
    - Model:
        - tracks tile values (array)
        - tracks whose turn
        - tracks number of moves
    - View:
        - display grid
        - update after each move
    - Controller:
        - changes tile values based on click events
        - checks for win/tie conditions

- Tile? (child of Game; may not be needed)
    - Model:
        - tracks tile value
        - tracks player who clicked it
    - View:
        - updates tile view to X or O
    - Controller:
        - changes tile value based on click event
        - make tile unclickable after move is made on it

## Class: TicTacToe
    class TicTacToe

### Model
    contructor()
        player1 - Player obj; null
        player2 - Player obj; null
        roundNum - int; 0
        firstTurn - true/false (alternate turns on match)

### View

### Controller
    resetTicTacToe()
        resets names to null
        scores to 0
        number of rounds to 0
        player turn to true
    changeTurnOrder
        switches first turn order

## Class: Player
    class Player

### Model
    constructor()
        playerName - str; null
        playerScore - int; 0

### View

### Controller
    setPlayerName()
        gets name for player
    updateScore()
        updates score for each win

## Class: Round
    class Round

### Model
    constructor(firstTurn)
        grid - array; [0, 0, 0,
                       0, 0, 0,
                       0, 0, 0]
        whoseTurn - boolean; true
        turnNum - int; 0

### View
    displayBoard()
        displays board on screen
    displayWin()
        displays win screen with player stats
    displayTie()
        displays tie screen

### Controller
    updateTile()
        updates index value in grid based on click events
        - if player 1 clicks, increment by 1
        - if player 2 clicks, decrement by 1
        - increment turnNum after each accepted click
    checkWin()
        checks grid (maybe after 5th turn?) against possible win conditions
        win conditions are when a row/column/diagonal adds up to 3 or -3
        - in a 1d grid, win conditions are

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

        if 3 is positive, player 1 wins
            increment player1 score by 1
        if 3 is negative, plauer 2 wins
            increment player2 score by 1

        if turnNum goes past 9, return tie

## Class: Tile

### Model

### View

### Controller
