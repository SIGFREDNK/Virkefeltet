"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Dropdown = _interopRequireDefault(require("./Dropdown"));

var _DatePicker = _interopRequireDefault(require("./DatePicker"));

var _DateRangePicker = _interopRequireDefault(require("./DateRangePicker"));

var _Clock = _interopRequireDefault(require("./Clock"));

var _Input = _interopRequireDefault(require("./Input"));

var _Search = _interopRequireDefault(require("./Search"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Form.Dropdown = _Dropdown.default;
Form.DatePicker = _DatePicker.default;
Form.DateRangePicker = _DateRangePicker.default;
Form.Clock = _Clock.default;
Form.Input = _Input.default;
Form.Search = _Search.default;

function Form(_ref) {
  let {
    action,
    submit,
    children,
    formClass
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("form", {
    action: action,
    onSubmit: submit,
    className: formClass
  }, children);
}

Form.defaultProps = {
  action: '',
  submit: null
};
Form.propTypes = {
  action: _propTypes.default.string,
  submit: _propTypes.default.func
};
var _default = Form;
exports.default = _default;