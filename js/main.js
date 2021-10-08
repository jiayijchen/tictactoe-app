const app = document.getElementById("app");

const titleContainer = generateHTML({ type: "div", id: "container", classes: "container text-center", parent: app }),
      container = generateHTML({ type: "div", id: "container", classes: "container text-center", parent: app }),
      buttonContainer = generateHTML({ type: "div", id: "container", classes: "container text-center", parent: app }),
      titleRow = generateHTML({ type: "div", id: "titleRow", classes: "row mt-5", parent: titleContainer }),
      titlePlain = generateHTML({ type: "h1", id: "title", text: "TicTacToe", parent: titleRow }),
      scoreRow = generateHTML({ type: "div", id: "scoreRow", classes: "row mt-2", parent: container }),
      boardRow = generateHTML({ type: "div", id: "boardRow", classes: "row mt-3", parent: container }),
      msgRow = generateHTML({ type: "div", id: "msgRow", classes: "row mt-3 text-center", parent: container });
      msg = generateHTML({ type: "p", id: "msg", parent: msgRow }),
      msg2 = generateHTML({ type: "p", id: "msg2", parent: msgRow });
      button = generateHTML({ type: "button", id: "resetButton", text: "Play", classes: "btn-lg btn-primary position-absolute bottom-0 start-50 translate-middle-x mb-5", parent: buttonContainer});
      generateHTML({ type: "strong", text: "App", parent: titlePlain });
     


// App Class
class TicTacToe {
    constructor() {
        this.player1Score = 0;
        this.player2Score = 0;
        this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.roundNum = 1;
        this.turnNum = 0;
        this.firstTurn = true;
        this.whoseTurn = this.firstTurn;
    }

    init() {
        generateHTML({ type: "div", classes: "col-6 fw-bold", id: "player1", text: "Player 1", parent: scoreRow });
        generateHTML({ type: "div", classes: "col-6 fw-bold", id: "player2", text: "Player 2", parent: scoreRow });
        generateHTML({ type: "div", classes: "col-6 fw-bold", id: "player1Score", text: `${this.player1Score}`, parent: scoreRow });
        generateHTML({ type: "div", classes: "col-6 fw-bold", id: "player2Score", text: `${this.player2Score}`, parent: scoreRow });
        this.generateBoard();
    }

    resetApp() {
        this.player1Score = 0;
        this.player2Score = 0;
        this.board.fill(0);  
        this.roundNum = 1;
        this.turnNum = 0;
        this.firstTurn = true;
        this.whoseTurn = this.firstTurn;
        button.onclick = this.init();
        // container.innerText = "";
    }

    updateScores() {
        document.getElementById("player1Score").innerText = this.player1Score;
        document.getElementById("player2Score").innerText = this.player2Score;

    }

    generateBoard() {
        let boardRow = document.getElementById("boardRow");
        for (let tileNum in this.board) {
            generateHTML({ type: "div", 
                           classes: "col-4 btn btn-light border border-dark btn-sq", 
                           id: `button${tileNum}`, 
                           parent: boardRow })
            .onclick = this.updateTile.bind(this, tileNum);
        }
        this.turnMsg();
        msg2.innerText = `Round ${this.roundNum}`;
    }

    updateTile(index) {
        let currentTile = document.getElementById(`button${index}`);
        if (this.whoseTurn) {
            this.board[index]++;
            currentTile.innerText = "X";
        } else {
            this.board[index]--;
            currentTile.innerText = "O";
        }
        currentTile.onclick = null;
        this.checkWin();
    }

    nextTurn() {
        this.turnNum++;
        this.whoseTurn = !this.whoseTurn;
    }

    checkWin() {
        const topRow = this.board[0] + this.board[1] + this.board[2],
            midRow = this.board[3] + this.board[4] + this.board[5],
            botRow = this.board[6] + this.board[7] + this.board[8],
            leftCol = this.board[0] + this.board[3] + this.board[6],
            midCol = this.board[1] + this.board[4] + this.board[7],
            rightCol = this.board[2] + this.board[5] + this.board[8],
            ascDiag = this.board[2] + this.board[4] + this.board[6],
            desDiag = this.board[0] + this.board[4] + this.board[8];
        const solutions = [topRow, midRow, botRow, leftCol, midCol, rightCol, ascDiag, desDiag];
        if (solutions.includes(3) || solutions.includes(-3)) {
            this.winMsg();
            this.gameOver();
        } else if (this.turnNum == 8) {
            this.tieMsg();
            this.gameOver();
        } else {
            this.nextTurn();
            this.turnMsg();
        }
    }

    // If there is a winner, set all tiles to be unclickable (later to nextMatch)
    gameOver() {
        for (let tileNum in this.board) {
            document.getElementById(`button${tileNum}`).onclick = this.nextGame.bind(this);
        }
        msg2.innerText = "Click the board to start the next game.";
        this.updateScores();
    }

    winMsg() {
        let winner;
        if (this.whoseTurn) {
            winner = "Player 1";
            this.player1Score++;
        } else {
            winner = "Player 2";
            this.player2Score++;
        }
        msg.className = "h1 text-danger";
        msg.innerText = `${winner} wins!`;
    }

    tieMsg() {
        msg.className = "h1 text-danger";
        msg.innerText = "Tied.";
    }

    turnMsg() {
        msg.className = "text-secondary";
        msg.innerText = `Current turn: ${this.whoseTurn ? 'Player 1' : 'Player 2'}`;
    }

    nextGame() {
        for (let tileNum in this.board) {
            let tile = document.getElementById(`button${tileNum}`)
            tile.innerText = "";
            tile.onclick = this.updateTile.bind(this, tileNum);
        }

        this.roundNum++;
        this.board.fill(0);
        this.turnNum = 0;
        this.firstTurn = !this.firstTurn;
        this.whoseTurn = this.firstTurn;
        this.turnMsg();
        console.log(this.roundNum);
        msg2.innerText = `Round ${this.roundNum}`;
    }
}

function generateHTML({ type, id = null, classes = null, text = '', parent = null }) {
    let element = document.createElement(type);
    element.className = classes;
    element.innerText = text;
    element.id = id;
    if (parent) {
        parent.appendChild(element);
    }
    return element;
}

function init() {
    let instance = new TicTacToe();
    button.addEventListener("click", function () {
        instance.init();
        button.innerText = "Reset";
        // button.onclick = instance.resetApp();
    });
}

init();