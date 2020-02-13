const chalk = require('chalk')
const clear = require('clear')
const ora = require('ora')
const figlet = require('figlet')

const inputTemplateChoices = require('./templateChoices')
const inputFeatureChoices = require('./featureChoices')

async function bootstrap() {
  clear()
  console.log(
    chalk.blue(
      figlet.textSync('YANCEY CLI!', {
        horizontalLayout: 'default',
        verticalLayout: 'default',
      }),
    ),
  )
  const templateChoices = await inputTemplateChoices()
  const featureChoices = await inputFeatureChoices()

  console.log({ ...templateChoices, ...featureChoices })

  const spinner = ora('Installing dependencies...')
  spinner.start()

  setTimeout(() => {
    spinner.succeed('Install success!')
  }, 3000)
}

module.exports = bootstrap
