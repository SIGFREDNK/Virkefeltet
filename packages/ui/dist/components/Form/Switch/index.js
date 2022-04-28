"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Switch;

var _react = _interopRequireDefault(require("react"));

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Switch(_ref) {
  let {
    name,
    value,
    setValue
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("label", {
    className: "switch"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "slider round",
    checked: value,
    onClick: () => {
      setValue(name, value ? false : true);
    }
  }));
}