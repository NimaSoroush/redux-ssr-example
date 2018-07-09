'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _actions = require('./actions');

function cardRight() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { right: false };
  var action = arguments[1];

  switch (action.type) {
    case _actions.REVERT_RIGHT:
      return Object.assign({}, state, {
        right: !state.right
      });
    default:
      return state;
  }
}

function cardLeft() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { left: false };
  var action = arguments[1];

  switch (action.type) {
    case _actions.REVERT_LEFT:
      return Object.assign({}, state, {
        left: !state.left
      });
    default:
      return state;
  }
}

exports.default = (0, _redux.combineReducers)({
  cardRight: cardRight,
  cardLeft: cardLeft
});