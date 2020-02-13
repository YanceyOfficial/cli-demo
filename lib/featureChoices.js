const inquirer = require('inquirer')

const choices = [
  {
    name: 'Babel',
  },
  {
    name: 'TypeScript',
  },
  {
    name: 'Progressive Web App (PWA) Support',
  },
  {
    name: 'Router',
  },
  {
    name: 'CSS Pre-processors',
  },
  {
    name: 'Linter / Formatter',
    checked: true,
  },
  {
    name: 'Unit Testing',
  },
  {
    name: 'E2E Testing',
  },
]

function inputFeatureChoices() {
  return inquirer.prompt([
    {
      type: 'checkbox',
      pageSize: 9,
      message: 'Check the features needed for your project:',
      name: 'features',
      choices,
      validate: function(answer) {
        // do some validate...
        return true
      },
    },
  ])
}
module.exports = inputFeatureChoices
