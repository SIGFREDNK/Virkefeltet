"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Clock;

var _react = _interopRequireDefault(require("react"));

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Clock(_ref) {
  let {
    name,
    setValue,
    value
  } = _ref;

  const initiate = event => {
    event.target.classList.remove('empty');
  };

  return /*#__PURE__*/_react.default.createElement("input", {
    value: value,
    onChange: event => setValue(name, event.target.value),
    type: "time",
    className: "clock empty input",
    onClick: initiate
  });
}