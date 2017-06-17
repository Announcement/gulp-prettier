# Gulp Prettier [![Build Status](https://travis-ci.org/Announcement/gulp-prettier.svg?branch=master)](https://travis-ci.org/Announcement/gulp-prettier)

A [Gulp](http://gulpjs.com/) plugin which allows the users to use [Prettier](https://github.com/prettier/prettier).


> Prettier is an opinionated code formatter inspired by
[refmt](https://facebook.github.io/reason/tools.html) with advanced
support for language features from:
> * JavaScript, including [ES2017](https://github.com/tc39/proposals/blob/master/finished-proposals.md)
> * [JSX](https://facebook.github.io/jsx/)
> * [Flow](https://flow.org/)
> * [TypeScript](https://www.typescriptlang.org/)
> * CSS, [LESS](http://lesscss.org/), and [SCSS](http://sass-lang.com)


## Usage

Simply pipe the input, and pass in arguments that you would to the regular format function.

### Example

The following is a perfectly valid, complete `gulpfile.js` that could be used.

~~~ javascript
import gulp from 'gulp'
import prettier from 'gulp-prettier'

let source = '**/*.js'
let destination = 'headers'
let options = {}

gulp.task('prettier', () =>
  gulp.src(source)
  .pipe(prettier(options))
  .pipe(gulp.dest(destination))
)
~~~

This would be invoked via `gulp prettier`, assuming that you are using the [gulp-cli](https://github.com/gulpjs/gulp-cli) tool.

---

Please consult the [Prettier](https://github.com/prettier/prettier) README to know the possible optional arguments.

### Configuration

At the time of this writing, these are the following **prettier** *default* arguments.
In the above example, the `options` object would contain these arguments.

~~~ javascript
{
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  tralingComma: "none",
  bracketSpacing: true,
  jsxBracketSameLine: false,
  cursorOffest: -1,
  rangeStart: 0,
  rangeEnd: Infinity,
  parser: "babylon"
  filepath: null
}
~~~

## License

[MIT License](https://raw.githubusercontent.com/bhargavrpatel/gulp-prettier/master/LICENSE)
