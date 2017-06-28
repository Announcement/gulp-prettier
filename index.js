var through = require('through2')
var prettier = require('prettier')
var select = require('./select')

module.exports = function (configuration) {
  const possible = select([
    'printWidth',
    'tabWidth',
    'useTabs',
    'semi',
    'singleQuote',
    'trailingComma',
    'bracketSpacing',
    'jsxBracketSameLine',
    'rangeStart',
    'rangeEnd',
    'parser',
    'filepath'
  ])

  function transformFunction (chunk, encoding, callback) {
    var contents
    var results
    var options

    contents = chunk.contents.toString()
    options = possible(configuration)

    results = prettier.format(contents, options)
    chunk.contents = Buffer.from(results)

    callback(null, chunk)
  }

  return through.obj(transformFunction)
}
