"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Input;

var _react = _interopRequireDefault(require("react"));

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Input(_ref) {
  let {
    type,
    inputClass,
    placeholder,
    name,
    value,
    setValue
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: type,
    className: "input ".concat(inputClass),
    placeholder: placeholder,
    name: name,
    value: value,
    onChange: event => setValue(name, event.target.value)
  }));
}