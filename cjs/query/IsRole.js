'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = IsRole

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * Check if the expression is a role.
 *
 * @param {module:query~ExprArg} expr
 *   The expression to check
 * @return {Expr}
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/isrole">IsRole</a>
 */
function IsRole(expr) {
  _common.arity.exact(1, arguments, IsRole.name)

  return new _Expr.default({
    is_role: (0, _common.wrap)(expr),
  })
} // Read functions