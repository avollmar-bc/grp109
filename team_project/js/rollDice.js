
function rollDice(diceAmount) {
    var result = [];
    for (i = 0; i < diceAmount; i++) {
        var singleRoll = '';
        singleRoll = Math.floor(Math.random() * 6 + 1);
        result.push(singleRoll);
    }
    document.getElementById("diceResult").innerHTML = result;
    return result;
};

/* rollDice(document.getElementById('dieCount'.value)) */