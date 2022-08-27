// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(data) {
// let licenseValue = data.license;
// if (!licenseValue) {
//   return "";
// } else {
//   return `${data.license}`;
// }
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(data)

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

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

  ✦ [Usage](#Usage)
  ✦ [Installation](#Installation)
  ✦ [Licensing](#Licensing)
  ✦ [Contributing](#Contributing)
  ✦ [Tests](#Tests)
  ✦ [Questions](#questions)
---
## Installation

${data.installation}
---
## Usage

${data.usage}
---
## Licensing

This project is licensed under   

For details, please visit: 
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
