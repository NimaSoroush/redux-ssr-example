'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rightChanged = rightChanged;

var _rightActions = require('./right-actions');

function rightChanged() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { right: false };
  var action = arguments[1];

  switch (action.type) {
    case _rightActions.RIGHT_CHANGED:
      return Object.assign({}, state, {
        right: !state.right
      });
    default:
      return state;
  }
}