// you can modify this, but keep the arguments
var TennisGame = function(player1Name, player2Name) {

    this.P1point = 0;
    this.P2point = 0;

    this.P1res = "";
    this.P2res = "";

    this.player1Name = player1Name;
    this.player2Name = player2Name;

    this.nagyobbNeve = function(){
      if (this.P1point>this.P2point) return this.player1Name;
      else return this.player2Name;
    }

};

// you should modify the internals of this function
TennisGame.prototype.getScore = function() {
    var pointRes = ['Love','Fifteen','Thirty','Forty'];
    var diff = Math.abs(this.P1point - this.P2point);
    var min = Math.min(this.P1point,this.P2point);
    var max = Math.max(this.P1point,this.P2point);

    var score = "";

    if (this.P1point === this.P2point && this.P1point < 3){
      score = pointRes[this.P1point] + "-All";
    }

    if (this.P1point === this.P2point && this.P1point > 2) {
      score = "Deuce";
    }

    if(max < 4 && this.P1point != this.P2point){
      score = pointRes[this.P1point] + "-" + pointRes[this.P2point];
    }

    if(min>=3 && diff == 1){
        score = "Advantage " + this.nagyobbNeve();
    }

    if (max >= 4 && diff >= 2) {
      score = "Win for " + this.nagyobbNeve();
    }

    return score;
};


TennisGame.prototype.P1Score = function() {
    this.P1point++;
};

TennisGame.prototype.P2Score = function() {
    this.P2point++;
};


/////////////////////////////////////////////////////
////// do not modify functions below this line //////
/////////////////////////////////////////////////////


TennisGame.prototype.SetP1Score = function(number) {
    var i;
    for (i = 0; i < number; i++) {
        this.P1Score();
    }
};

TennisGame.prototype.SetP2Score = function(number) {
    var i;
    for (i = 0; i < number; i++) {
        this.P2Score();
    }
};


TennisGame.prototype.wonPoint = function(player) {
    if (player === "player1")
        this.P1Score();
    else
        this.P2Score();
};


if (typeof window === "undefined") {
    module.exports = TennisGame;
}
