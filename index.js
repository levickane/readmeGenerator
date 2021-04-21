// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'Title of repository: ',
    name: 'title'
  },
  {
    type: 'input',
    message: 'Description for the repository: ',
    name: 'description'
  },
  {
    type: 'input',
    message: 'Installation: ',
    name: 'installation',
    default: 'npm i'
  },
  {
    type: 'input',
    message: 'Usage: ',
    name: 'usage'
  },
  {
    type: 'list',
    message: 'License: ',
    name: 'license',
    choices: ['Apache2.0', 'MIT', 'None']
  },
  {
    type: 'input',
    message: 'Contributing: ',
    name: 'contributing'
  },
  {
    type: 'input',
    message: 'Tests: ',
    name: 'tests',
    default: 'npm run test'
  },
  {
    type: 'input',
    message: 'Questions: ',
    name: 'questions'
  }
]

// TODO: Create a function to write README file
function writeToFile(theFileName, data) {
  fs.writeFile(theFileName, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('Success!')
  )
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    const filename = `${response.title.toLowerCase().split('').join('')}.md`
    writeToFile(filename, response)
  })
}

// Function call to initialize app
init()
