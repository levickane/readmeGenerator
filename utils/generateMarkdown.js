// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// This function returns the license link
// If there is no license, it returns an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return ` - [License](#License)`;
  }
  return '';
}

// This function returns the license section of README
// If there is no license, it returns an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License

This project is licensed under ${license}`;
  }
  return '';
}

//This function generates a markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  - [Installation](#Installation)
  - [Usage](#Usage)
${renderLicenseLink(data.license)}
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)
  ## Installation
    ${data.installation}
  ## Usage
  ${data.usage}
${renderLicenseSection(data.license)}
  ## Contributing 
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  If you have any questions, you can contact me through my [Github](www.github.com/${
    data.questions
  })

`;
}

module.exports = generateMarkdown;
