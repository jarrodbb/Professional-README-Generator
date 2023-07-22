# Professional-README-Generator

Professional Readme Generator

## Description

To streamline a users work process a Professional Readme Generator that can be run using the command-line application was created

The Readme Generator creates a formatted Readme file with the users responses of specific question.

These prompted question form the structure of the readme

Table of contents added to easily navigate the readme file

## Installation

package manager - NPM
Node

### Ensure a package.json file exsits

If there is no package.json install one by running npm init

**run npm init**

**package.json**

### Install Inquirer

Install dependencies
Run npm install **inquirer@8.2.4**
NPM install needs to be run in the folder the package.json exists

node_modules folder will be created. This folder contains all third-party packages that have been dowloaded

Add a .gitignore file and add node_modules to ensure the third-party packages are not commited to Github

[Professional-README-Generator](https://github.com/jarrodbb/Professional-README-Generator)

**JavaScript**
[index.js](https://github.com/jarrodbb/Professional-README-Generator/blob/main/assets/js/index.js)
[package.json](https://github.com/jarrodbb/Professional-README-Generator/blob/main/assets/js/package.json)
[generateMarkdown.js](https://github.com/jarrodbb/Professional-README-Generator/tree/main/assets/utils)

## Usage

#### run node index.js

#### Inquirer will run. The first question is "what is your Github username?"

#### Second question, "what is your email address?"

#### Third question, "what is your project's name?"

#### Fourth question, "Please write a short description of your project"

#### Fifth question, "what kind of license should your project have?". The answer will need to be selected from the list

#### Sixth question, "What command should be run to install dependencies?

#### Seventh question, "What command should be run to run tests?

#### Eight question, "What does the user need to know about using the repo?"

#### Ninth question, "What does the user need to know about contributing to the repo?"

#### Successful message

#### object of user information

#### markdown file created

#### How the Readme.md file will be displayed

## Licence

Please refer to the licence in the repo.
