//TODO
//add git ignore
//table of contents
// description, installation instructions
// TODO: Include packages needed for this application
//usage inforamtion
// contribution guiidlines
// test instructions
//licnese with badge - utils folder ****
//Questions - include //github username + email

// const questions = [];
// TODO: Create an array of questions for user input

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("../utils/generateMarkdown");

inquirer
  .prompt([
    {
      type: "input",
      name: "username",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
    {
      type: "input",
      name: "name",
      message: "What is your project's name?",
    },
    {
      type: "input",
      name: "desciption",
      message: "Please write a short desciption of your project",
    },
    {
      type: "list",
      name: "license",
      message: "What kind of license should project have?",
      choices: [
        "No license",
        "Apache License 2.0",
        "GNU v3",
        "MIT",
        "BSD 2-Clause",
        "BSD-3-Clause",
        "Boost",
        "Creative Commons",
        "Eclipse",
        "GNU GPL v3",
        "Mozilla",
        "The Unlicense",
      ],
    },
    {
      type: "input",
      name: "dependencies",
      message: "What command should be run to install dependencies?",
    },
    {
      type: "input",
      name: "test",
      message: "What command should be run to run tests?",
    },
    {
      type: "input",
      name: "info",
      message: "What does the user need to know about using the repo?",
    },
    {
      type: "input",
      name: "contribute",
      message:
        "What does the user need to know about contributing to the repo?",
    },
  ])
  .then((response) => {
    console.log(response);

    const readmePageContent = generateMarkdown(response);

    fs.writeFile("../readme/README.md", readmePageContent, (err) =>
      err ? console.log(err) : console.log("Successfully created readme.md!")
    );
  });
