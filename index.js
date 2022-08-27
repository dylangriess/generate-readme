// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  "What is the title of your project?", //0 title
  "What was your motivation for this project?", //1 description1
  "Why did you build this project?", //2 description2
  "What problem does it solve?", //3 description3
  "What did you learn?", //4 description4
  "Provide instructions and examples for use.", //5 usage
  "What are the steps required to install your project?", //6 installation
  "Which license does this project use?", //7 license
  "Please list any collaborators with links to their Github page.", //8 credits
  "Specify any tests used for this application.", //9 testing
  "Please print your Github username:", //10 github
  "What is your e-mail address?", //11 email
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  inquirer
    .prompt([
      {
        type: "input",
        message: questions[0],
        name: "title",
      },
      {
        type: "input",
        message: questions[1],
        name: "description1",
      },
      {
        type: "input",
        message: questions[2],
        name: "description2",
      },
      {
        type: "input",
        message: questions[3],
        name: "description3",
      },
      {
        type: "input",
        message: questions[4],
        name: "description4",
      },
      {
        type: "input",
        message: questions[5],
        name: "usage",
      },
      {
        type: "input",
        message: questions[6],
        name: "installation",
      },
      {
        type: "list",
        message: questions[7],
        choices: [
          "Apache 2.0",
          "GNU GPLv3",
          "GNU GPLv2",
          "MIT",
          "ISC",
          "None of the above (If selected, enter manually)",
        ],
        name: "license",
      },
      {
        type: "input",
        message: questions[8],
        name: "credits",
      },
      {
        type: "input",
        message: questions[9],
        name: "testing",
      },
      {
        type: "input",
        message: questions[10],
        name: "github",
      },
      {
        type: "input",
        message: questions[11],
        name: "email",
      },
    ])
    .then((answers) => {
      const getMarkdown = generateMarkdown(answers);
      fs.writeFile("./outputReadMe/README.md", getMarkdown, (err) =>
        error
          ? console.error("Something went wrong.")
          : console.log("Successfully created README.md!")
      );
    });
}

// TODO: Create a function to initialize app
function init() {
  writeToFile();
}

// Function call to initialize app
init();
