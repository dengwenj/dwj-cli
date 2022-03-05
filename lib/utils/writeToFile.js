const fs = require('fs')

const createDirSync = require('./createDirSync')

const writeToFile = (dest, path, content) => {
  // 判断 dest 是否存在，不存在，创建对应的文件夹
  if (createDirSync(dest)) fs.promises.writeFile(path, content)
}

module.exports = writeToFile
