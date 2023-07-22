# Professional-README-Generator

Professional Readme Generator

## Description

To streamline a users work process a Professional Readme Generator that can be run using the command-line application was created

The Readme Generator creates a formatted Readme file with the users responses of specific question.

These prompted question form the structure of the readme

Table of contents added to easily navigate the readme file

## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [licence](#licence)

## Installation

### Ensure a package.json file exsits

If there is no package.json install one by running npm init

#### run npm init
![Screenshot 2023-07-22 at 11 09 55 am](https://github.com/jarrodbb/Professional-README-Generator/assets/132813348/ff0a7aab-2db6-42bf-a95c-edaa8d049ebe)

#### package.json
![Screenshot 2023-07-22 at 11 10 12 am](https://github.com/jarrodbb/Professional-README-Generator/assets/132813348/e385c3ac-7441-4d10-8185-c6e2d7324d66)

### Install Inquirer

Install dependencies by running npm install **inquirer@8.2.4**
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
![Screenshot 2023-07-22 at 11 30 29 am](https://github.com/jarrodbb/Professional-README-Generator/assets/132813348/0cad266d-cfd3-4af2-aa25-f6e231770aa0)

#### Inquirer will run. The first question is "what is your Github username?"
![Screenshot 2023-07-22 at 11 31 49 am](https://github.com/jarrodbb/Professional-README-Generator/assets/132813348/eddfd3a4-ee5c-4d10-909f-e54089b11cf2)

#### Second question, "what is your email address?"
![Screenshot 2023-07-22 at 11 32 04 am](https://github.com/jarrodbb/Professional-README-Generator/assets/132813348/e92ed8e1-1f6c-4872-9f0f-4e99558f285c)

#### Third question, "what is your project's name?"
![Screenshot 2023-07-22 at 11 32 36 am](https://github.com/jarrodbb/Professional-README-Generator/assets/132813348/a6589a28-85cf-4375-8d10-cafdb8c9ecee)

#### Fourth question, "Please write a short description of your project"
![Screenshot 2023-07-22 at 11 33 29 am](https://github.com/jarrodbb/Professional-README-Generator/assets/132813348/b93871e5-161a-46e7-b5e3-dbd3a78c419f)

#### Fifth question, "what kind of license should your project have?". The answer will need to be selected from the list
![Screenshot 2023-07-22 at 11 48 15 am](https://github.com/jarrodbb/Professional-README-Generator/assets/132813348/564290e7-30aa-4034-888e-d0d0bbd65e0f)

#### Sixth question, "What command should be run to install dependencies?
![Screenshot 2023-07-22 at 12 04 00 pm](https://github.com/jarrodbb/Professional-README-Generator/assets/132813348/b9815c4f-96d8-4a36-b62f-03a91b838d8f)

#### Seventh question, "What command should be run to run tests?
![Screenshot 2023-07-22 at 12 04 13 pm](https://github.com/jarrodbb/Professional-README-Generator/assets/132813348/f6f36409-e677-4296-b803-9a480d157ba1)

#### Eight question, "What does the user need to know about using the repo?"
![Screenshot 2023-07-22 at 12 09 17 pm](https://github.com/jarrodbb/Professional-README-Generator/assets/132813348/9264b23e-8482-4011-9cc1-0eab9ea23016)

#### Ninth question, "What does the user need to know about contributing to the repo?"
![Screenshot 2023-07-22 at 12 09 25 pm](https://github.com/jarrodbb/Professional-README-Generator/assets/132813348/73e20522-b58a-4e13-9576-e7644412fc7b)

#### Successful message
![Screenshot 2023-07-22 at 11 36 19 am](https://github.com/jarrodbb/Professional-README-Generator/assets/132813348/d07b3c30-0b79-403f-b90a-08d7028b5e8a)

#### object of user information
![Screenshot 2023-07-22 at 12 11 49 pm](https://github.com/jarrodbb/Professional-README-Generator/assets/132813348/fae64f88-03d3-446b-9b0f-2066623c3382)

#### markdown file created
![Screenshot 2023-07-22 at 11 37 11 am](https://github.com/jarrodbb/Professional-README-Generator/assets/132813348/5e12c8b2-c63d-4106-a5ca-6b2da4e121b7)
![Screenshot 2023-07-22 at 11 37 21 am](https://github.com/jarrodbb/Professional-README-Generator/assets/132813348/398ca101-1343-4141-9ce1-11d7ee43b20c)

#### How the Readme.md file will be displayed
![Screenshot 2023-07-22 at 11 37 36 am](https://github.com/jarrodbb/Professional-README-Generator/assets/132813348/2f428e6a-a901-4600-a81d-5a7fd56031f0)
![Screenshot 2023-07-22 at 11 37 43 am](https://github.com/jarrodbb/Professional-README-Generator/assets/132813348/568def18-b126-4f49-8fda-5ae7be3a6669)

## Licence

Please refer to the licence in the repo.
