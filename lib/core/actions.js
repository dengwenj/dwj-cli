const path = require('path')
const { program } = require('commander')

const { reactAddress, vue2Address, vue3Address } = require('../config/address')
const cloneFrameTemplate = require('../utils/cloneFrameTemplate')

const { compile } = require('../utils/compile')
const writeToFile = require('../utils/writeToFile')

const createProjectAction = async (project, other) => {
  const frame = program.opts().frame
  if (!frame) {
    console.log('请写上您要用哪个框架开发~ 例如: dwj create project -f react(vue3)');
    return
  }

  switch (frame) {
    case 'react':
      console.log('正在为您创建项目中~')
      cloneFrameTemplate(reactAddress, project)
      break
    case 'vue2':
      console.log('正在为您创建项目中~')
      cloneFrameTemplate(vue2Address, project)
      break
    case 'vue3':
      console.log('正在为您创建项目中~')
      cloneFrameTemplate(vue3Address, project)
    default:
      console.log('没有您写的这个哦~')
      break
  }
}

const addComponentAction = async (name, dest) => {
  // 编译 ejs 模板 result
  const res = await compile('component.react.ejs', { name })
  // 将 result 写入到 .jsx 或者 .vue 文件中
  const targetDest = path.resolve(dest, name.toLowerCase())
  const componentPath = path.resolve(targetDest, `index.jsx`)
  writeToFile(targetDest, componentPath, res) // 传的路径和内容
  // 放到对应的文件夹中 执行命令就行了，在 utils writeToFile 文件里面写的 比如：dwj dwj addcomponent Hello
}

// console.log(path.resolve()); 看你在哪个路径下面执行的

module.exports = {
  createProjectAction,
  addComponentAction
}
