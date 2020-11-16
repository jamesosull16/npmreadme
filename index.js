const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is the name of your application?",
    name: "appname",
  },
  {
    type: "input",
    message: "Please provide a description of the application.",
    name: "description",
  },
  {
    type: "input",
    message: "",
    name: "tableofcontents",
  },
  {
    type: "input",
    message: "Please describe how a user would install your application.",
    name: "installation",
  },
  {
    type: "input",
    message: "Please describe how a user would use your application.",
    name: "usage",
  },
  {
    type: "input",
    message: "Please share with fellow developers how one may contribute to your application.",
    name: "contributing",
  },
  {
    type: "input",
    message: "What is your github username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address",
    name: "eamil",
  },
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
