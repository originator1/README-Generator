// TODO: Include packages needed for this application
const generateMarkdown = require("./generateMarkdown");
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(generateMarkdown(data))
    inquirer.prompt([
        {
            type:'input',
            message:'Enter title of your project:',
            name:'title',
        },
        {
            type: 'input',
            message: 'repsitory subtitle//badges
        //repo subtitle &initialdescription
        //email link?
        //license
        //description
        //
        {
            type: 'input',
            message: 'Description of project',
            name: '',
        },
        {
            type: 'input',
            message: 'Table of contents??',
            name: 'q3',
        },
        {
            type: 'input',
            message: 'Enter installation instructions',
            name: 'q4',
        },
        {
            type: 'input',
            message: 'Usage??',
            name: 'q5',
        },
        {
            type: 'list',
            message: 'Choose your license preference.',
            name: 'q6',
        },
        {
            type: 'input',
            message: 'Contributing',
            name: 'q7',
        },
        {
            type: 'input',
            message: 'Tests to be run:',
            name: 'q8',
        },
        {
            type: 'input',
            message: 'Questions',
            name: 'q9',
        },
    ])
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
