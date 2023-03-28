let playerName = prompt ("Welcome to GC mini golf! What is your name?")
console.log("The player's name is " + playerName)

let numberOfholes = prompt ("Hi, " + playerName + "! Would you like to play 3 or 6 holes?" ) 
 

if (numberOfholes === "3" ) {
    console.log("3 holes it is!");
    let scoreOneOfThree = Number( prompt ("How many putts for hole 1? (par:3)"));
        console.log("first hole was " + scoreOneOfThree + " putts");
    let scoreTwoOfThree = Number( prompt ("How many putts for hole 2? (par:3)"));
        console.log("second hole was " + scoreTwoOfThree + " putts");
    let scoreThreeOfThree = Number( prompt ("How many putts for hole 3? (par:3)"));
        console.log("third hole was " + scoreThreeOfThree + " putts"); 

    let TotalForThree = scoreOneOfThree + scoreTwoOfThree + scoreThreeOfThree;
        console.log("The player's total score is " + TotalForThree);
    let lessThanNine = 9 - TotalForThree;
        console.log("Under par is par minus the score");
    let OverNine = TotalForThree - 9;
        console.log("over par is the score minus par");

        if (TotalForThree === 9) {
            alert(`Good game, ${playerName} Your total par was: 0`);
            console.log("The player matches par on three holes if score is 9. This player scored " + TotalForThree);
        } else if (TotalForThree < 9) {
            alert(`Great job, ${playerName}! Your total par was: -` + lessThanNine);
            console.log("The player is under par on three holes is score is less than 9. This player scored -" + lessThanNine);
        } else if (TotalForThree > 9) {
            alert(`Nice try, ${playerName}... your total par was +` + OverNine);
            console.log("The player is over par on three holes if they score more than 9. This player scored +" + OverNine);
        }
        

} else if (numberOfholes === "6" ) {
    console.log("6 holes it is!")
    let scoreOneOfSix = Number( prompt ("How many putts for hole 1? (par:3)"));
        console.log("first hole was " + scoreOneOfSix + " putts");
    let ScoreTwoOfSix = Number( prompt ("How many putts for hole 2? (par:3)"));
        console.log("second hole was " + ScoreTwoOfSix + " putts");
    let scoreThreeOfSix = Number( prompt ("How many putts for hole 3? (par:3)"));
        console.log("third hole was " + scoreThreeOfSix + " putts");
    let scoreFourOfsix = Number( prompt ("How many putts for hole 4? (par:3)"));
        console.log("fourth hole was " + scoreFourOfsix + " putts");
    let scoreFiveOfSix = Number( prompt ("How many putts for hole 5? (par:3)"));
        console.log("fifth hole was " + scoreFiveOfSix + " putts");
    let scoreSixOfSix = Number( prompt ("How many putts for hole 6? (par:3"));
        console.log("sixth hole was " + scoreSixOfSix + " putts");
}

    let TotalForSix = scoreOneOfSix + ScoreTwoOfSix + scoreThreeOfSix + scoreFourOfsix + scoreFiveOfSix +scoreSixOfSix;
        console.log("The player's total score is " + TotalForSix);
    let lessThanEighteen = 18 - TotalForSix;
        console.log("Under par is the score minus par");
    let OverEighteen = 18 - TotalForSix;
        console.log("over par is par plus the score");

        if (TotalForSix === 18) {
            alert(`Good game, ${playerName} Your total par was: 0`);
            console.log("The player matches par on 6 holes if score is 18. This player scored" + TotalForSix);
        } else if (TotalForSix < 18) {
            alert(`Great job, ${playerName}! Your total par was: -` + lessThanEighteen);
            console.log("The player is under par on 6 holes is score is less than 18. This player scored -" + lessThanEighteen);
        } else if (TotalForSix > 18) {
            alert(`Nice try, ${playerName}... your total par was +` + OverEighteen);
            console.log("The player is over par on 6 holes if they score more than 18. This player scored +" + OverEighteen);
        }
        