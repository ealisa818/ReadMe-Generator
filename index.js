// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatorMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "Username",
        message: "Please enter your GitHub username: ",
    },
    {
        type: "input",
        name: "Email",
        message: "Please enter your email address: ",
    },
    {
        type: "input",
        name: "Description1",
        message: "What was your motivation? Why did you build this project?",
    },
    {
        type: "input",
        name: "Description2",
        message: "What problem does it solve?",
    },
    {
        type: "input",
        name: "Description3",
        message: "What did you learn?",
    },
    {
        type: "input",
        name: "Installation",
        message: "what are the steps required to install your project?",
    },
    {
        type: "input",
        name: "Usage",
        message: "Provide instructions for usage:",
    },
    {
        type: "input",
        name: "Contributors",
        message: "Please list any contributors: ",
    },
    {
        type: "input",
        name: "License",
        message: "Please provide any licenses: ",
    },
    {
        type: "input",
        name: "features",
        message: "Please list any features: ",
    },
    {
        type: "input",
        name: "tests",
        message: "Please explain how to run any tests: ",
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
