// Constants are declared to be able to use inquirer
const inquirer = require("inquirer");
// to get the fs package, Call the function require and assign to constant fs
const fs = require("fs");
// link function from generateMarkdown.js
const generateMarkdown = require("../utils/generateMarkdown");

//Inquirer
//Each question to ask the user is broken down in .prompt
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
      type: "list", // List is used as the type to be able to give the user a selection of licenses
      name: "license",
      message: "What kind of license should your project have?",
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

    //generateMarkdown function is called with the response from inquirer as the argument and assigned to a constant variable
    const readmePageContent = generateMarkdown(response);

    //fs.writeFile is used to write the readme file with the correct file format and readmePageContent
    fs.writeFile(
      "../readme/README.md",
      readmePageContent,
      (err) =>
        err ? console.log(err) : console.log("Successfully created readme.md!") //If there is an error, it will be console logged else, the message "Successfully created readme.md!" will be displayed
    );
  });
