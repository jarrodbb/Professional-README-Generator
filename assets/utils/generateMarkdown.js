// Function to return the appropriate badge for the selected license.
// If there is no license, an empty string is returned
function renderLicenseBadge(license) {
  if (license == "No license") {
    console.log("No license");
    return "";
  }
  if (license == "MIT") {
    console.log("MIT");
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  if (license == "Apache License 2.0") {
    console.log("Apache License 2.0");
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  if (license == "GNU v3") {
    console.log("GNU v3");
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }
  if (license == "BSD 2-Clause") {
    console.log("BSD 2-Clause");
    return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
  }
  if (license == "BSD-3-Clause") {
    console.log("BSD-3-Clause");
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  }
  if (license == "Boost") {
    console.log("Boost");
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  }
  if (license == "Creative Commons") {
    console.log("Creative Commons");
    return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
  }
  if (license == "Eclipse") {
    console.log("Eclipse");
    return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
  }
  if (license == "GNU GPL v3") {
    console.log("GNU Affero");
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }
  if (license == "Mozilla") {
    console.log("Mozilla");
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  }
  if (license == "The Unlicense") {
    console.log("The Unlicense");
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
  }
}

//Function to return the license link for the selected license
//If there is no license, an empty string is returned
function renderLicenseLink(license) {
  if (license == "No license") {
    console.log("No license");
    return "";
  }
  if (license == "MIT") {
    console.log("MIT");
    return "(https://opensource.org/licenses/MIT)";
  }
  if (license == "Apache License 2.0") {
    console.log("Apache License 2.0");
    return "(https://opensource.org/licenses/Apache-2.0)";
  }
  if (license == "GNU v3") {
    console.log("GNU v3");
    return "(https://www.gnu.org/licenses/gpl-3.0)";
  }
  if (license == "BSD 2-Clause") {
    console.log("BSD 2-Clause");
    return "(https://opensource.org/licenses/BSD-2-Clause)";
  }
  if (license == "BSD-3-Clause") {
    console.log("BSD-3-Clause");
    return "(https://opensource.org/licenses/BSD-3-Clause)";
  }
  if (license == "Boost") {
    console.log("Boost");
    return "(https://www.boost.org/LICENSE_1_0.txt)";
  }
  if (license == "Creative Commons") {
    console.log("Creative Commons");
    return "(http://creativecommons.org/publicdomain/zero/1.0/)";
  }
  if (license == "Eclipse") {
    console.log("Eclipse");
    return "(https://opensource.org/licenses/EPL-1.0)";
  }
  if (license == "GNU GPL v3") {
    console.log("GNU Affero");
    return "(https://www.gnu.org/licenses/gpl-3.0)";
  }
  if (license == "Mozilla") {
    console.log("Mozilla");
    return "(https://opensource.org/licenses/MPL-2.0)";
  }
  if (license == "The Unlicense") {
    console.log("The Unlicense");
    return "(http://unlicense.org/)";
  }
}

//Function to generate the readme file with the inputs from the user
function generateMarkdown(data) {
  // Using template literals, the markdown file is constructed with the user inputs
  // The functions to return the license badge and link are called within the template literals
  return `# ${data.name}

  ${renderLicenseBadge(data.license)}

  ## Desciption
  ${data.desciption}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation

  To Install the necessary dependencies, run the following command:
  ${data.dependencies}

  ## Usage

  ${data.info}

  ## License

  This project is under the ${data.license} license. 

  More information about ${data.license} can be found at 

  ${renderLicenseLink(data.license)}

  ## Contributing

  Please follow these instructions to be able to contribute to this project, 
  ${data.contribute} 

  ## Tests

  To run a test, run the following command:
  ${data.test}

  ## Questions

  If you have any questions about the project, open an issue or contact me directly at ${
    data.email
  }.

  You can find more work at **[${data.username}](https://github.com/${
    data.username
  })**
  `;
}

//Function is exported
module.exports = generateMarkdown;
