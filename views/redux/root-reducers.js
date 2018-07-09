'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _rightReducers = require('./right-reducers');

var _leftReducers = require('./left-reducers');

exports.default = (0, _redux.combineReducers)({
  rightChanged: _rightReducers.rightChanged,
  leftChanged: _leftReducers.leftChanged
});