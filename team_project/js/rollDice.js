
function rollDice(diceAmount) {
    //declare vars
    var result = [];
    //Start markup for parent dice div
    var diceMarkup = '<div id="diceDisplay">';
    //Roll the dice, did I mention my middle name is 'danger'?
    for (i = 0; i < diceAmount; i++) {
        var singleRoll = '';
        //Simple Math Magic.
        singleRoll = Math.floor(Math.random() * 6 + 1);
        //Append roll result to final results array
        result.push(singleRoll);
        
        //Determine appended markup based on roll result
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
                diceMarkup += 'fail ';
        }
    }
    //Close result markup element
    diceMarkup += '<div>'
    //Calculate sum
    var diceSum = result.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    //Append sum markup to result
    result += '<div id="diceSum"> Sum = ' + diceSum + '</div>';
    //Put the things on the page
    document.getElementById("diceResult").innerHTML = diceMarkup + "<br/>" + result;
    //Surely we need an output, right?
    return result;
};

/* rollDice(document.getElementById('dieCount'.value)) */