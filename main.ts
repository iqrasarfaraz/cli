#! /usr/bin/env node
import inquirer  from "inquirer";


//1) computer will generat a randome number
//2) user input for guessing number
//3) computer users input with computer generated number and show result

const randomNumber = Math.floor(Math.random()* 7 +1);
const answers = await inquirer.prompt([
    {
        name:"userGuessedNumber",
        type:"input",
        message:"please Enter your guess number ",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("congratulation! you gussed right number");
}
    else{
        console.log ("you gussed wrong number");
    }





