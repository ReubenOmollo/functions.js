const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter the student\'s percentage: ', (input) => {
    let percentage = parseFloat(input);

    if (percentage >= 90) {
        console.log(`The student's percentage is: ${percentage}%, and their score is A`);
    } else if (percentage >= 80) {
        console.log(`The student's percentage is: ${percentage}%, and their score is B`);
    } else if (percentage >= 70) {
        console.log(`The student's percentage is: ${percentage}%, and their score is C`);
    } else if (percentage >= 60) {
        console.log(`The student's percentage is: ${percentage}%, and their score is D`);
    } else if (percentage >= 50) {
        console.log(`The student's percentage is: ${percentage}%, and their score is E`);
    } else {
        console.log(`The student's percentage is: ${percentage}%, and their score is F`);
    }

    rl.close();
});
