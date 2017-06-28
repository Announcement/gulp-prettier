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

  function message (exception, string) {
    let fromException = () => exception.message || exception.name
    return fromException.message || string
  }

  function transformFunction (chunk, encoding, callback) {
    var contents
    var results
    // var options

    contents = chunk.contents

    results = format()

    if (results && buffer()) {
      callback(null, chunk)
    }

    function format () {
      try {
        results = prettier.format(contents)
      } catch (exception) {
        console.log(exception)
        callback(new PluginError({
          plugin: 'gulp-prettier',
          message: message(exception, 'could not prettier.format(contents)')
        }))

        return true
      }

      return false
    }

    function buffer () {
      try {
        chunk.contents = Buffer.from(results)
      } catch (exception) {
        console.log(exception)
        callback(new PluginError({
          plugin: 'gulp-prettier',
          message: message(exception, 'fail on .contents = buffer:results')
        }))
        return true
      }

      return false
    }

    // options = possible(configuration)
  }

  return through.obj(transformFunction)
}
