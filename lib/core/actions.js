const path = require('path')
const { promisify } = require('util')

const download = promisify(require('download-git-repo'))
const open = require('open')

const { reactRepo } = require('../config/address')
const { commandSpawn } = require('../utils/terminal')
const { compile } = require('../utils/compile')
const writeToFile = require('../utils/writeToFile')

const createProjectAction = async (project, other) => {
  console.log('正在为您创建项目中~');
  // clone 项目
  await download(reactRepo, project, { clone: true })
  // npm i
  const command = process.platform === 'win32' ? 'npm.cmd' : 'npm'
  await commandSpawn(command, ['install'], { cwd: `./${project}` })
  // npm start
  commandSpawn(command, ['run', 'start'], { cwd: `./${project}` })
  // 打开浏览器
  open('http://localhost:3000/')
}

const addComponentAction = async (name, dest) => {
  // 编译 ejs 模板 result
  const res = await compile('component.react.ejs', { name })
  // 将 result 写入到 .jsx 或者 .vue 文件中
  const targetDest = path.resolve(dest, name.toLowerCase())
  const componentPath = path.resolve(targetDest, `${name}.jsx`)
  writeToFile(targetDest, componentPath, res) // 传的路径和内容
  // 放到对应的文件夹中 执行命令就行了，在 utils writeToFile 文件里面写的 比如：dwj dwj addcomponent Hello
}

// console.log(path.resolve()); 看你在哪个路径下面执行的

module.exports = {
  createProjectAction,
  addComponentAction
}
