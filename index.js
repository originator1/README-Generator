// TODO: Include packages needed for this application
const generateMarkdown = require("./generateMarkdown");
const inquirer = require('inquirer');
const fs = require('fs');
const { listenerCount } = require("process");

// TODO: Create an array of questions for user input
const questions = [ 
    {
        type:'input',
        message:'Enter title of your project:',
        name:'title',
    },
    {
        type: 'list',
        message:'Select a prefered license:',
        name:'licenses',
        choices:['MIT', 'Apache 2.0', 'GNU V3.0', 'Mozilla 2.0'],
    },
    {
        type: 'input',
        message: 'Enter your name:',
        name: 'myName',
    },
    {
        type: 'input',
        message: 'Enter your email:',
        name: 'email',            
    },
    {
        type: 'input',
        message: 'Enter project contributors:',
        name: 'contributors',
    },
    {
        type: 'input',
        message: 'Enter project version:',
        name: 'version',
    },
    {
        type: 'input',
        message: 'Testing done with:',
        name: 'testing',
    },
    {
        type: 'input',
        message: 'Enter table of contents:',
        name: 'table',
    },
    {
        type: 'input',
        message: 'Respository Title:',
        name:'repoTitle',
    },
    {
        type: 'input',
        message: 'Enter description of project:',
        name: 'repoDescription',
    },
    {
        type: 'input',
        message: 'Enter main image link:',
        name: 'imageSnap',
    },
    {
        type: 'input',
        message: 'Enter installation instructions',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Enter future developement ideas:',
        name: 'futureDevelop',
    },
    {
        type: 'input',
        message: 'Enter way to leave feedback:',
        name: 'feedback',
    },
    {
        type: 'input',
        message: 'Enter Sources used:',
        name: 'sources',
    },
];

// TODO: Create a function to write README file
function writeToFile(filename, data) {
    fs.writeFile(filename, data, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log('Success!');
    })
   
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile('READMEDEMO.md', generateMarkdown(data));
    })
    
};

// Function call to initialize app
init();








// const init = () => {
//     promptUser()
//     // Use writeFileSync method to use promises instead of a callback function
//       .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
//       .then(() => console.log('Successfully wrote to index.html'))
//       .catch((err) => console.error(err));
//   };
  
//   init();
