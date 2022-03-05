const path = require('path')
const { promisify } = require('util')

const ejs = require('ejs')

const compile = async (templateName, data) => {
  const templatePosition = `../templates/react/${templateName}`
  const renderFilePath = path.resolve(__dirname, templatePosition)
  // 渲染文件
  const renderFile = promisify(ejs.renderFile)
  try {
    const res = await renderFile(renderFilePath, { data }, {})
    return res
  } catch (error) {
    return error
  }
}

module.exports = {
  compile
}