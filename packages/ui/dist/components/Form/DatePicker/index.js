'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.default = DateSelector;

var _react = _interopRequireDefault(require('react'));

require('./styles.css');

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function DateSelector(_ref) {
    let { listener, value, disablePast } = _ref;

    const initiate = event => {
        event.target.classList.remove('empty');
    };

    const getCurrentDate = () => {
        const today = new Date();
        return [
            today.getFullYear(),
            ('0' + (today.getMonth() + 1)).slice(-2),
            ('0' + today.getDate()).slice(-2)
        ].join('-');
    };

    const minDateValue = disablePast ? getCurrentDate() : null;
    return /*#__PURE__*/ _react.default.createElement('input', {
        type: 'date',
        className: 'empty date-selector input',
        onClick: event => initiate(event),
        value: value,
        onChange: listener,
        min: minDateValue
    });
}
