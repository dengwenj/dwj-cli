const fs = require('fs')
const path = require('path')

// 判断 dest 文件夹是否存在
// 比如： hh/ff/dd/cc
const createDirSync = (dest) => {
  // 存在就返回 true
  if (fs.existsSync(dest)) {
    return true
  }
  // 不存在看他父级存不存在，存在就创建，不存在再看他父级存不存在
  if (createDirSync(path.dirname(dest))) {
    fs.mkdirSync(dest)
    return true
  }
}

module.exports = createDirSync