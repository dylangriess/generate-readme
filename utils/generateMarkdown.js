// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
let licenseValue = "";
if (licenseValue) {
  licenseValue = `![License](https://img.shields.io/badge/License-${data.license}-blue.svg)`;
}
return licenseValue
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data)
let licenseInput = data.license;
// Switch statement based on user input for data.license
switch (licenseInput) {
  case "Apache License 2.0":
    licenseLink = "https://opensource.org/licenses/Apache-2.0";
    break;
  case "GNU GPLv3":
    licenseLink = "https://www.gnu.org/licenses/gpl-3.0";
    break;
  case "GNU GPLv2":
    licenseLink = "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html"
    break;
  case "MIT":
    licenseLink ="https://opensource.org/licenses/MIT)";
    break;
  case "ISC":
    licenseLink = "https://opensource.org/licenses/ISC";
    break;
  default:
    licenseLink = "";
}
return licenseLink;


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {

// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data.license)}
---
## Link   
${data.urllink}

---
## Description    
${data.description1}
${data.description2}
${data.description3}
${data.description4}

---
## Table of Contents   

- [Usage](#usage)
- [Installation](#installation)
- [Licensing](#licensing)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

---
## Installation   

${data.installation}
---
## Usage   

${data.usage}
---
## Licensing   

This project is licensed under ${data.license}

For details, please visit: ${renderLicenseLink(data)}
---
## Contributing   

${data.credits}
---
## Tests   

${data.testing}
---
## Questions   

Visit my GitHub page: [${data.github}](https://github.com/${data.github})   

Email me at: [${data.email}](${data.email})
`;
}

module.exports = generateMarkdown;
