function roll(){
    var d1 = Math.floor(Math.random()*6)+1;
    var d2 = Math.floor(Math.random()*6)+1;
    document.querySelector(".img1").setAttribute("src","images/dice"+d1+".png");
    document.querySelector(".img2").setAttribute("src","images/dice"+d2+".png");
    return [d1,d2];
}

function decide(d1, d2){
    var winner;
    if(d1>d2){
        winner = "🚩 Player 1 wins! ";
    }
    else if(d1<d2){
        winner = "Player 2 wins! 🚩";
    }
    else{
        winner = "Draw! 🎲";
    }
    return winner;
}

// Roll the dice
var [d1,d2] = roll();
// Decide winner
var winner = decide(d1,d2);
// Change h1 text
document.querySelector("h1").textContent = winner;
