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

async function inputTemplateChoices() {
  const answers = await inquirer.prompt([
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

  console.log(answers)
}

module.exports = inputTemplateChoices
