
function rollDice(diceAmount) {
    var result = [];
    for (i = 0; i < diceAmount; i++) {
        var singleRoll = '';
        singleRoll = Math.floor(Math.random() * 6 + 1);
        result.push(singleRoll);
    }
    console.log(result);
    return result;
};

/* rollDice(document.getElementById('dieCount'.value)) */