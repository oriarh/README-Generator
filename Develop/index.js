// // TODO: Include packages needed for this application
//1. inquirer 2. fs

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

const inquirer = require('inquirer');
const fs = require('fs');
const { resolve } = require('path');

inquirer.prompt([{
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your contact number?',
        name: 'contact',
    },
    {
        type: 'input',
        message: 'Where are you from?',
        name: 'location',
    },]
)
.then((response) => {
    console.log(response);
    const answers = JSON.stringify(response);
    fs.writeFileSync('testReadme.txt',answers,'utf-8');
});
