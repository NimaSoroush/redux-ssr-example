'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.leftChanged = leftChanged;

var _leftActions = require('./left-actions');

function leftChanged() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { left: false };
  var action = arguments[1];

  switch (action.type) {
    case _leftActions.LEFT_CHANGED:
      return Object.assign({}, state, {
        left: !state.left
      });
    default:
      return state;
  }
}