"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Button;

var _react = _interopRequireDefault(require("react"));

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Button(_ref) {
  let {
    value,
    onclick,
    styling
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("button", {
    className: styling,
    onClick: onclick
  }, value);
}