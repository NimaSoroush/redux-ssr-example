'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.leftChanged = leftChanged;
var LEFT_CHANGED = exports.LEFT_CHANGED = 'CHANGE_LEFT';

function leftChanged() {
  return {
    type: LEFT_CHANGED
  };
}