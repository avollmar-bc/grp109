
function rollDice(diceAmount) {
    var result = [];
    var diceMarkup = '';
    for (i = 0; i < diceAmount; i++) {
        var singleRoll = '';
        singleRoll = Math.floor(Math.random() * 6 + 1);
        result.push(singleRoll);
        console.log(result[i]);
        
        switch (result[i]) {
            case 1:
                diceMarkup += '<div class="dice-one"></div>';
                break;
            case 2:
                diceMarkup += '<div class="dice-two"></div>';
                break;
            case 3:
                diceMarkup += '<div class="dice-three"></div>';
                break;
            case 4:
                diceMarkup += '<div class="dice-four"></div>';
                break;
            case 5:
                diceMarkup += '<div class="dice-five"></div>';
                break;
            case 6:
                diceMarkup += '<div class="dice-six"></div>';
                break;
            default:
                diceMarkup += 'fail '
        }
    }

    var diceSum = result.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    result += " | SUM = " + diceSum;
    document.getElementById("diceResult").innerHTML = result + " | " + diceMarkup;
    
    return result;
};

/* rollDice(document.getElementById('dieCount'.value)) */