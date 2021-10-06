
// App / Board / Game Class
class TicTacToe {
    constructor() {
        this.gameState = true;
        this.matchNum = 0;
        this.turnNum = 0;
        this.board = [0, 0, 0,
                      0, 0, 0,
                      0, 0, 0];
        this.playerTurn = 0;
        this.player1Name = null;
        this.player2Name = null;
        this.player1Score = 0;
        this.player2Score = 0;
    }
    init() {
        
    }
    nextMatch() {
        this.matchNum++;
    }
    nextTurn() {
        this.turnNum++;
    }

}

