var through = require('through2')
var prettier = require('prettier')
var {PluginError} = require('gulp-util')
// var select = require('./select')

// import gutil from 'gulp-util'
// import merge from 'merge'
// import sourcemap from 'vinyl-sourcemaps-apply'

// const PluginError = gutil.PluginError

module.exports = function (configuration) {
  // const possible = select([
  //   'printWidth',
  //   'tabWidth',
  //   'useTabs',
  //   'semi',
  //   'singleQuote',
  //   'trailingComma',
  //   'bracketSpacing',
  //   'jsxBracketSameLine',
  //   'rangeStart',
  //   'rangeEnd',
  //   'parser',
  //   'filepath'
  // ])

  function transformFunction (chunk, encoding, callback) {
    var contents
    var results
    var error
    // var options

    contents = chunk.contents
    // options = possible(configuration)
    try {
      results = prettier.format(contents)
      chunk.contents = Buffer.from(results)
      callback(null, chunk)
    } catch (exception) {
      error = new PluginError({
        plugin: 'gulp-prettier',
        message: exception.message
      })
      callback(error)
    }
  }

  return through.obj(transformFunction)
}
