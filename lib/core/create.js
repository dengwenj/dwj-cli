const { program } = require('commander')

const { createProjectAction, addComponentAction } = require('./actions')

const createCommands = () => {
  // dwj create demo
  program
    .command('create <project> [other...]') // <> 必填 []可填  ...变长参数，是个数组
    .description('创建项目')
    .action(createProjectAction)
  
  // dwj addcomponent hello scr/component
  program
    .command('addcomponent <name>')
    .description('创建组件, 例如: dwj addcomponent Hello')
    .action((name) => {
      addComponentAction(name, program.opts().dest || 'src/components')
    })
}

module.exports = createCommands
