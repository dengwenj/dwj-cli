const { promisify } = require('util')

const download = promisify(require('download-git-repo'))
const open = require('open')

const { commandSpawn } = require('./terminal')

const runOpenFrame = async (command, project, startOrServe, port) => {
  await commandSpawn(command, ['install'], { cwd: `./${project}` })
  // npm start
  commandSpawn(command, ['run', startOrServe], { cwd: `./${project}` })
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
  const command = process.platform === 'win32' ? 'npm.cmd' : 'npm'
  if (frame === 'react') runOpenFrame(command, project, 'start', 3000)
  if (frame === 'vue2' || frame === 'vue3') runOpenFrame(command, project, 'serve', 8080)
}

module.exports = cloneFrameTemplate