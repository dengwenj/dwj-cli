#!/usr/bin/env node
  
/**
 * 自定义终端命令
 * 1、 #!/usr/bin/env node
 * 2、package.json "bin": { "dwj": "index.js" }
 * 3、npm link
 * 4、dwj 生效
 */
const { program } = require('commander')

const helpOptions = require('./lib/core/options.js')
const createCommands = require('./lib/core/create')

// 查看版本号
program.version(require('./package.json').version)

// 选项
helpOptions()

// 命令
createCommands()

// 解析终端命令
program.parse(process.argv)
