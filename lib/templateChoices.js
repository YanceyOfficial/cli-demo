const inquirer = require('inquirer')
const chalk = require('chalk')

const choices = [
  {
    name: `default (${chalk.yellow('babel')}, ${chalk.yellow('eslint')})`,
  },
  {
    name: 'Manually select features',
  },
]

function inputTemplateChoices() {
  return inquirer.prompt([
    {
      type: 'list',
      message: 'Please pick a preset:',
      name: 'template',
      choices,
      validate: function(answer) {
        // do some validate...
        return true
      },
    },
  ])
}

module.exports = inputTemplateChoices
