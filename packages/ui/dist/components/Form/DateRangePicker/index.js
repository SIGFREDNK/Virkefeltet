"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DateRangePicker;

var _react = _interopRequireDefault(require("react"));

var _utils = require("@virkefeltet/utils");

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DateRangePicker(_ref) {
  let {
    startDateValue,
    endDateValue,
    startDateName,
    endDateName,
    setValue,
    disablePast
  } = _ref;

  const initiate = event => {
    event.target.classList.remove('empty');
  };

  const update = event => {
    setValue(startDateName, event.target.value);
    const endDate = event.target.nextElementSibling;
    endDate.min = event.target.value;
    if (endDate.value < event.target.value) setValue(endDateName, event.target.value);
  };

  const minDateValue = disablePast ? (0, _utils.getCurrentDate)() : null;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("input", {
    type: "date",
    className: "date-range empty input start-date",
    min: minDateValue,
    onClick: initiate,
    onChange: event => update(event),
    value: startDateValue
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "date",
    className: "date-range empty input end-date",
    min: minDateValue,
    onClick: initiate,
    onChange: event => setValue(endDateName, event.target.value),
    value: endDateValue
  }));
}