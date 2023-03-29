let playerName = prompt ("Welcome to GC mini golf! What is your name?")
console.log("The player's name is " + playerName)

let numberOfholes = prompt ("Hi, " + playerName + "! Would you like to play 3 or 6 holes?" ) 

let scoreOneOfThree = 0;
let scoreTwoOfThree = 0;
let scoreThreeOfThree = 0;

let TotalForThree = 0;

let lessThanNine = 0;
let OverNine = 0;

let scoreOneOfSix = 0;
let ScoreTwoOfSix = 0;
let scoreThreeOfSix = 0;
let scoreFourOfsix = 0;
let scoreFiveOfSix = 0;
let scoreSixOfSix = 0;

let TotalForSix = 0;

let lessThanEighteen = 0;
let OverEighteen = 0;


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
    let OverNine = TotalForThree - 9;

        if (TotalForThree === 9) {
            console.log(`Good game, ${playerName}. Your total par was: 0`);
        } else if (TotalForThree < 9) {
            console.log(`Great job, ${playerName}! Your total par was: -` + lessThanNine);
        } else if (TotalForThree > 9) {
            console.log(`Nice try, ${playerName}... Your total par was: +` + OverNine);
        }
        
     
    } else if (numberOfholes === "6" ) {
    console.log("6 holes it is!");
    
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
    

    let TotalForSix = scoreOneOfSix + ScoreTwoOfSix + scoreThreeOfSix + scoreFourOfsix + scoreFiveOfSix +scoreSixOfSix;
        console.log("The player's total score is " + TotalForSix);
    
    let lessThanEighteen = 18 - TotalForSix;
    let OverEighteen = TotalForSix - 18;
           
        if (TotalForSix === 18) {
            console.log(`Good game, ${playerName}. Your total par was: 0`);
        } else if (TotalForSix < 18) {
            console.log(`Great job, ${playerName}! Your total par was: -` + lessThanEighteen);
        } else if (TotalForSix > 18) {
            console.log(`Nice try, ${playerName}... Your total par was: +` + OverEighteen);
        }
    }