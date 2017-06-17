const through = require('through2')
const gutil = require('gulp-util')
const prettier = require('prettier')
const merge = require('merge')
const sourcemap = require('vinyl-sourcemaps-apply')

const PluginError = gutil.PluginError

export default function (options) {
  function transform (file, encoding, callback) {
    let contents = file.contents
    let result = prettier.format(contents, options)

    callback(null, file)
  }
}
