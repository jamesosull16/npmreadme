const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAysnc = util.promisify(fs.writeFile);
const generateMarkdown = require("./generatemarkdown");

// array of questions for user
const questions = () =>
  inquirer.prompt([
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
    {
      type: "input",
      message: "What is the name of your application?",
      name: "appname",
    },
    {
      type: "input",
      message: "Please provide a brief explanation of your application.",
      name: "description",
    },
    {
      type: "list",
      message: "Please select the licenses you will be utilizing.",
      choices: [
        "Apache 2.0 License",
        "Mozilla Public License 2.0",
        "MIT License",
        "IBM Public License Version 1.0",
        "ISC License",
      ],
      name: "licenses",
    },
    {
      type: "input",
      default: "npm i",
      message: "What command should be run to install the dependencies?",
      name: "installation",
    },
    {
      type: "input",
      default: "npm test",
      message: "What command needs to be run to run tests?",
      name: "test",
    },
    {
      type: "input",
      message: "What does the user need to know about using the reposoitory?",
      name: "usage",
    },
    {
      type: "input",
      message:
        "What does the user need to know about contributing to the repo?",
      name: "contributing",
    },
  ]);

// function to write README file

// function to initialize program
const init = async () => {
  try {
    const data = await questions();

    const readme = generateMarkdown(data);

    await writeFileAysnc("README.md", readme);

    console.log("Generating README.md");
  } catch (err) {
    console.log(err);
  }
};

// function call to initialize program
init();
