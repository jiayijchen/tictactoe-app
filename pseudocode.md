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

# Pseudocode: Multiclass

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

- Game (Board/Match/Grid; child of TicTacToe?)
    - Model:
        - tracks tile values (array)
            - 0 = unused tile
            - 1 = "X"-clicked tile
            - -1 = "O"-clicked tile
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
        currentRound - Game obj; null
        roundNum - int; 0
        firstTurn - true/false (alternate turns on match)

### View
    displayTicTacToe()
        creates div row for gameMsg
        creates div row
            displayPlayer(player1)
            displayGame(currentGame)
            displayPlayer(player2)
        creates div row for reset button


### Controller
    init() (also used to reset app)
        resets players to null
        resets currentGame to null
        resets roundNum to 0
        resets firstTurn to true
        call getPlayers
        call newGame
    changeTurnOrder
        switches first turn order
    getPlayers()
        creates two Player objects
    newGame()
        creates new Game
    nextRound()
        call newGame
        call changeTurnOrder
    

## Class: Player
    class Player

### Model
    constructor()
        name - str; null
        score - int; 0

### View
    displayPlayer()
        creates div column with name and score

### Controller
    setPlayerName(name)
        gets name for player
    addPoint()
        increment player score by 1;

## Class: Game
    class Game

### Model
    constructor(firstTurn)
        board - array; [0, 0, 0,
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

# Pseudocode: Singleton

## Summary
Objects:

- TicTacToe (the app)

## Class: TicTacToe
    class TicTacToe

## Model (tracks state)
    constructor()
        player1Name =
        player1Score
        player2Name
        player2Score
        roundNum
        turnNum
        whoseTurn
        grid (array)

## View (displays content)

## Controller (changes state)
    setPlayer1()
        sets player1Name
    setPlayer2()
        sets player2Name
    nextRound()
        increment roundNum by 1
    update