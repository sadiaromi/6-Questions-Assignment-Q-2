import inquirer from "inquirer";

let answer = await inquirer.prompt([
    {
        name: "enteredNumber",
        type: "input",
        message: "Enter your number:"
    }
]);

let dynamicNumber = 10;

if(answer.enteredNumber>dynamicNumber){
    console.log(`The entered number ${answer.enteredNumber} is greater than ${dynamicNumber}`);
}
else if (answer.enteredNumber<dynamicNumber){
    console.log(`The entered number ${answer.enteredNnumber} is less than ${dynamicNumber}`);
}
else if(answer.enteredNumber=dynamicNumber){
    console.log(`The entered number ${answer.enteredNumber} is equal to ${dynamicNumber} `);
}
else{};