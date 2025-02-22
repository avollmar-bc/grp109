
function rollDice(diceAmount) {
    var result = [];
    var testCases = '';
    for (i = 0; i < diceAmount; i++) {
        var singleRoll = '';
        singleRoll = Math.floor(Math.random() * 6 + 1);
        result.push(singleRoll);

        switch (result[i]) {
            case 1:
                testCases += "one";
            case 2:
                testCases += "two";
            case 3:
                testCases += "three";
            case 4:
                testCases += "four";
            case 5:
                testCases += "five";
            case 6:
                testCases += "six";
            default:
                testCases += "Jorf";
        }
    }

    var diceSum = result.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(diceSum);
    
    result += " | SUM = " + diceSum;
    document.getElementById("diceResult").innerHTML = result;
    
    console.log(testCases);
    return result;
};

/* rollDice(document.getElementById('dieCount'.value)) */