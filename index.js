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
const generateMarkdownObj = require('./Develop/utils/generateMarkdown');
console.log(generateMarkdownObj);
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
        message: 'What are the steps required to install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'What liscense are you using for this project?(Use arrow keys to scroll up or down and press enter to select)',
        name: 'license',
        choices: ['Apache License 2.0','GNU General Public License v3.0','MIT license','BSD 2-Clause "simplified" License','BSD 3-Clause "New" or "Revised" License','Boost Software License 1.0','Creative Commons Zero v1.0 Universal','Eclipse Public License 2.0','None']
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
        message: 'What is your github Username?',
        name: 'githubUsername',
    },
    {
        type: 'input',
        message: 'What is the best email to reach you at?',
        name: 'githubEmail',
    }
]
)

//Gets the responses and replaces them in the README.md

.then((response) => {
    //console.log(response);

   let contents = fs.readFileSync('Develop/READMETemplate.md','utf-8');

    Object.keys(response).forEach((key) => {
        const value = response[key]
        // if(key === 'githubUsername') {
        //     inquirer.prompt ([{
        //         type: 'input',
        //         message: 'What is the best email to reach you at?',
        //         name: 'githubEmail'
        //     }])
        //     .then((reponse) => {
        //         contents=contents.replace(`{githubEmail}`,value)
        //     })
        //     contents = contents.replace(`{${key}}`,value);
        // }
        // else 
        if (key === 'license') {
            contents = contents.replace(`{${key}}`,value);
            contents = contents.replace(`{licenseBadge}`,generateMarkdownObj.renderLicenseBadge(value));
            contents = contents.replace(`{licenseLink}`,generateMarkdownObj.renderLicenseLink(value));
        }
        else {contents = contents.replaceAll(`{${key}}`,value)}
    })

    let writeFile = fs.writeFileSync('myReadme.md',contents);

});
