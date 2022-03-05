const { promisify } = require('util')

const download = promisify(require('download-git-repo'))
const open = require('open')

const { commandSpawn } = require('./terminal')

async function cloneFrameTemplate(frameAddress, project) {
  // clone 项目
  try {
    await download(frameAddress, project, { clone: true })
  } catch (error) {
    console.log(error)
  }
  // npm i
  const command = process.platform === 'win32' ? 'npm.cmd' : 'npm'
  await commandSpawn(command, ['install'], { cwd: `./${project}` })
  // npm start
  commandSpawn(command, ['run', 'start'], { cwd: `./${project}` })
  // 打开浏览器
  open('http://localhost:3000/')
}

module.exports = cloneFrameTemplate