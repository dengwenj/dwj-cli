const { promisify } = require('util')

const download = promisify(require('download-git-repo'))
const open = require('open')

const { commandSpawn } = require('./terminal')

const runOpenFrame = async (npm, project, startOrServe, port) => {
  try {
    await commandSpawn(npm, ['install'], { cwd: `./${project}` })
  } catch (error) {
    console.log(error)
  }
  // npm start
  commandSpawn(npm, ['run', startOrServe], { cwd: `./${project}` })
  // 打开浏览器
  open(`http://localhost:${port}/`)
}

async function cloneFrameTemplate(frameAddress, project, frame) {
  // clone 项目
  try {
    await download(frameAddress, project, { clone: true })
  } catch (error) {
    console.log(error)
  }
  // npm i
  const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm'
  if (frame === 'react') runOpenFrame(npm, project, 'start', 3000)
  if (frame === 'vue2' || frame === 'vue3') runOpenFrame(npm, project, 'serve', 8080)
}

module.exports = cloneFrameTemplate