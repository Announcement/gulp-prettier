import through from 'through2'
import prettier from 'prettier'
import select from './select'

// import gutil from 'gulp-util'
// import merge from 'merge'
// import sourcemap from 'vinyl-sourcemaps-apply'

// const PluginError = gutil.PluginError

export default function (options) {
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

  function transform (file, encoding, callback) {
    let contents = file.contents
    let result = prettier.format(contents, possible(options))

    file.contents = result

    callback(null, file)
  }

  return through.obj(transform)
}
