#!/usr/bin/env node

const program = require('commander')
const chalk = require('chalk')

program.version('yancey-cli 1.0.0').usage('<command> [options]')

program
  .command('create <app-name>')
  .description('create a new project powered by vue-cli-service')
  .option('-p, --preset <presetName>', 'Skip prompts and use saved or remote preset')
  .option('-d, --default', 'Skip prompts and use default preset')
  .action((name, cmd) => {
    require('../lib/bootstrap')()
  })

program
  .command('serve [entry]')
  .description('serve a .js or .vue file in development mode with zero config')
  .option('-o, --open', 'Open browser')
  .option('-c, --copy', 'Copy local url to clipboard')
  .option('-p, --port <port>', 'Port used by the server (default: 8080 or next available port)')
  .action((entry, cmd) => {
    require('../lib/bootstrap')()
  })

program
  .command('build [entry]')
  .description('build a .js or .vue file in production mode with zero config')
  .option('-t, --target <target>', 'Build target (app | lib | wc | wc-async, default: app)')
  .option('-n, --name <name>', 'name for lib or web-component mode (default: entry filename)')
  .option('-d, --dest <dir>', 'output directory (default: dist)')
  .action((entry, cmd) => {
    require('../lib/bootstrap')()
  })

// output help information on unknown commands
program.arguments('<command>').action(cmd => {
  program.outputHelp()
  console.log(`  ` + chalk.red(`Unknown command ${chalk.yellow(cmd)}.`))
})

// add some useful info on help
program.on('--help', () => {
  console.log()
  console.log(`  Run ${chalk.cyan(`vue <command> --help`)} for detailed usage of given command.`)
  console.log()
})

program.parse(process.argv)

// 未传入参数, 返回 output
if (!process.argv.slice(2).length) {
  program.outputHelp()
}
