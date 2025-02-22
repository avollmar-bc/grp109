
function rollDice(diceAmount) {
    var result = [];
    var testCases = '';
    for (i = 0; i < diceAmount; i++) {
        var singleRoll = '';
        singleRoll = Math.floor(Math.random() * 6 + 1);
        result.push(singleRoll);
        console.log(result[i]);
        
        switch (result[i]) {
            case '1':
                testCases += "one";
                break;
            case '2':
                testCases += "two";
                break;
            case '3':
                testCases += "three";
                break;
            case '4':
                testCases += "four";
                break;
            case '5':
                testCases += "five";
                break;
            case '6':
                testCases += "six";
                break;
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