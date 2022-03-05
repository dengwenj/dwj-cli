// 执行终端命令相关代码
const { spawn } = require('child_process')

// npm i
// const commandSpawn = (...args) => {
//   return new Promise((resolve, reject) => {
//     const childProcess = spawn(...args)
//     childProcess.stdout.pipe(process.stdout) // 在这个进程里面输出
//     childProcess.stderr.pipe(process.stderr)
//     childProcess.on('close', () => {
//       console.log(111111);
//       resolve()
//     })
//   })
// }

const commandSpawn = (...args) => {
  return new Promise((resolve, reject) => {
    const childProcess = spawn(...args)
    childProcess.stdout.pipe(process.stdout)
    childProcess.stderr.pipe(process.stderr)
    childProcess.on("close", () => {
      resolve();
    })
  })
}

module.exports = {
  commandSpawn
}
