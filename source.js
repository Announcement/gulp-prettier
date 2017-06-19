import through from 'through2'
// import gutil from 'gulp-util'
import prettier from 'prettier'
// import merge from 'merge'
// import sourcemap from 'vinyl-sourcemaps-apply'

// const PluginError = gutil.PluginError

export default function (options) {
  function transform (file, encoding, callback) {
    let contents = file.contents
    let result = prettier.format(contents, options)

    callback(null, file)
  }

  return through.obj(transform)
}
