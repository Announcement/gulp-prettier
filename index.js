'use strict'

var through = require('through2')
var prettier = require('prettier')

/**
 * Intended to be used with Array.prototype.map
 *
 * @function select
 *
 * @version 1.0.0
 * @variation 2
 *
 * @param {Array.<String>} it - Properties to pull from each object.
 *
 * @returns {Function} A callback function for reducing objects to similar objects with only specified properties.
 */
var select = function (parameters) {
  return function (it) {
    var object

    object = {}

    parameters.forEach(forEach)

    return object

    function forEach (key) {
      if (exists(it) && it.hasOwnProperty(key)) {
        object[key] = it[key]
      }
    }

    function exists (it) {
      return it !== undefined && it !== null
    }
  }
}

var source = function (configuration) {
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

module.exports = source
