'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Drop

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#collections).
 *
 * @param {module:query~ExprArg} number
 *   An expression resulting in the number of elements to drop from the collection.
 * @param {module:query~ExprArg} collection
 *   An expression resulting in a collection.
 * @return {Expr}
 * */
function Drop(number, collection) {
  _common.arity.exact(2, arguments, Drop.name)

  return new _Expr.default({
    drop: (0, _common.wrap)(number),
    collection: (0, _common.wrap)(collection),
  })
}