'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.default = DateSelector;

var _react = _interopRequireDefault(require('react'));

var _utils = require('@virkefeltet/utils');

require('./styles.css');

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function DateSelector(_ref) {
    let { listener, value, disablePast } = _ref;

    const initiate = event => {
        event.target.classList.remove('empty');
    };

    const minDateValue = disablePast ? (0, _utils.getCurrentDate)() : null;
    return /*#__PURE__*/ _react.default.createElement('input', {
        type: 'date',
        className: 'empty date-selector input',
        onClick: event => initiate(event),
        value: value,
        onChange: listener,
        min: minDateValue
    });
}
