'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Min

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   A collection of numbers to multiply together.
 * @return {Expr}
 */
function Min() {
  _common.arity.min(1, arguments, Min.name)

  return new _Expr.default({
    min: (0, _common.wrap)((0, _common.varargs)(arguments)),
  })
}