'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _leftActions = require('../redux/left-actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardLeft = function (_Component) {
  _inherits(CardLeft, _Component);

  function CardLeft() {
    _classCallCheck(this, CardLeft);

    return _possibleConstructorReturn(this, (CardLeft.__proto__ || Object.getPrototypeOf(CardLeft)).apply(this, arguments));
  }

  _createClass(CardLeft, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          dispatch = _props.dispatch,
          left = _props.left,
          right = _props.right;

      return _react2.default.createElement(
        'div',
        { className: 'col-left' },
        _react2.default.createElement(
          'span',
          null,
          'Left is: ',
          String(left)
        ),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(
          'span',
          null,
          'Right is: ',
          String(right)
        ),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(
          'a',
          { className: 'btn',
            onClick: function onClick(e) {
              dispatch((0, _leftActions.leftChanged)());
            }, target: '_blank' },
          'Revert left to ',
          String(!left)
        )
      );
    }
  }]);

  return CardLeft;
}(_react.Component);

function mapStateToProps(state) {
  var right = state.rightChanged.right;
  var left = state.leftChanged.left;


  return {
    right: right,
    left: left
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(CardLeft);