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
        message: "What is your project's title?",
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please describe your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Add the Table of Contents here',
        name: 'TOC',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What liscense are you using for this project?',
        name: 'license',
    },
    {
        type: 'input',
        message: 'List your collaborators',
        name: 'credits',
    },
    {
        type: 'input',
        message: 'Go the extra mile and write tests for your application',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Please contact us if you have any questions',
        name: 'badges',
    }
]
)

//Gets the responses and replaces them in the README.md

.then((response) => {
    //console.log(response);

   let contents = fs.readFileSync('../README.md','utf-8');

    //console.log(contents);

    console.log(Object.keys(response));

    Object.keys(response).forEach((key) => {
        const value = response[key];
        console.log(key,value);
        contents = contents.replace(`{${key}}`,value);

    })

    let writeFile = fs.writeFileSync('testReadme.md',contents);

});

