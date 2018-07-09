'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.revertRight = revertRight;
exports.revertLeft = revertLeft;
var REQUEST_APPS = exports.REQUEST_APPS = 'REQUEST_APPS';
var RECEIVE_APPS = exports.RECEIVE_APPS = 'RECEIVE_APPS';
var REVERT_RIGHT = exports.REVERT_RIGHT = 'REVERT_RIGHT';
var REVERT_LEFT = exports.REVERT_LEFT = 'REVERT_LEFT';

function revertRight() {
  return {
    type: REVERT_RIGHT
  };
}

function revertLeft() {
  return {
    type: REVERT_LEFT
  };
}