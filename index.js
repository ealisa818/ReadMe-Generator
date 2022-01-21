// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const generatorMarkdown = require("./generateMarkdown");
// const { generateKey } = require('crypto');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const promptUser = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your GitHub username: ",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address: ",
    },
    {
        type: "input",
        name: "description",
        message: "What was your motivation? Why did you build this project?",
    },
        {
        type: "input",
        name: "installation",
        message: "what are the steps required to install your project?",
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions for usage:",
    },
    {
        type: "input",
        name: "contributors",
        message: "Please list any contributors: ",
    },
    {
        type: "input",
        name: "license",
        message: "Please provide any licenses: ",
    },
    {
        type: "input",
        name: "tests",
        message: "Please explain how to run any tests: ",
    },  
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

function writeToFile(filename, data) {
    fs.writeFile(filename, (data), (err) =>
      err ? console.error(err) : console.log('README created!')
    );
 }
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(promptUser).then((data) => {
        writeToFile("generateMarkdown.md", generateMarkdown(data))
    }
    )
}

// Function call to initialize app
init();
