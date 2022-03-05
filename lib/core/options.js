const { program } = require('commander')

const helpOptions = () => {
  // 增加自己的 options 定义选项, 这个 options 写了，在 --help 里面看的见
  program.option('-j --dwj', 'a dwj is cli',) // dwj -j
  program.option('-d --dest <dest>', 'a destination folder, src/components')
  program.option('-f --frame <frame>', '例如: dwj create demo -f react')

  // 监听命令
  program.on('option:dest', () => {
    // console.log('-d')
  })
  program.on('--help', () => {
    // console.log('help')
  })
}

module.exports = helpOptions
