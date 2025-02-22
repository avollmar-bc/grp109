
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
                diceMarkup += '<div class="first-face"><span class="pip"></span></div>';
                break;
            case 2:
                diceMarkup += '<div class="second-face"><span class="pip"></span><span class="pip"></span></div>';
                break;
            case 3:
                diceMarkup += '<div class="third-face"><span class="pip"></span><span class="pip"></span><span class="pip"></span></div>';
                break;
            case 4:
                diceMarkup += '<div class="fourth-face"><div class="column"><span class="pip"></span><span class="pip"></span></div><div class="column"><span class="pip"></span><span class="pip"></span></div></div>';
                break;
            case 5:
                diceMarkup += '<div class="fifth-face"><div class="column"><span class="pip"></span><span class="pip"></span></div><div class="column"><span class="pip"></span></div><div class="column"><span class="pip"></span><span class="pip"></span></div></div>';
                break;
            case 6:
                diceMarkup += '<div class="sixth-face"><div class="column"><span class="pip"></span><span class="pip"></span><span class="pip"></span></div><div class="column"><span class="pip"></span><span class="pip"></span><span class="pip"></span></div></div>';
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