const through = require('through2')
const prettier = require('prettier')

module.exports = function (options) {
  function transform (file, encoding, callback) {
    let contents = file.contents
    let result = prettier.format(contents, options)

    callback(null, file)
  }

  return through.obj(transform)
}
