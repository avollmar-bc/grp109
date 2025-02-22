
function rollDice(diceAmount) {
    var result = [];
    for (i = 0; i < diceAmount; i++) {
        var singleRoll = '';
        singleRoll = Math.floor(Math.random() * 6 + 1);
        result.push(singleRoll);
    }
    document.getElementById("diceResult").innerHTML = result;
    var diceSum = result.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    
    console.log(diceSum);
    result += " | SUM = " + diceSum;

    document.getElementById("diceResult").innerHTML = result;

    return result;
};

/* rollDice(document.getElementById('dieCount'.value)) */