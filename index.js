'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {
  function transform(file, encoding, callback) {
    var contents = file.contents;
    var result = _prettier2.default.format(contents, options);

    callback(null, file);
  }

  return _through2.default.obj(transform);
};

var _through = require('through2');

var _through2 = _interopRequireDefault(_through);

var _prettier = require('prettier');

var _prettier2 = _interopRequireDefault(_prettier);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
