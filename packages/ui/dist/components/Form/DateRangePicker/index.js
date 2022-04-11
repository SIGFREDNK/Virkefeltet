'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.default = DateRangePicker;

var _react = _interopRequireDefault(require('react'));

require('./styles.css');

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

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

    const getCurrentDate = () => {
        const today = new Date();
        return [
            today.getFullYear(),
            ('0' + (today.getMonth() + 1)).slice(-2),
            ('0' + today.getDate()).slice(-2)
        ].join('-');
    };

    const update = event => {
        setValue(startDateName, event.target.value);
        const endDate = event.target.nextElementSibling;
        endDate.min = event.target.value;
        if (endDate.value < event.target.value)
            setValue(endDateName, event.target.value);
    };

    const minDateValue = disablePast ? getCurrentDate() : null;
    return /*#__PURE__*/ _react.default.createElement(
        _react.default.Fragment,
        null,
        /*#__PURE__*/ _react.default.createElement('input', {
            type: 'date',
            className: 'date-range empty input start-date',
            min: minDateValue,
            onClick: initiate,
            onChange: event => update(event),
            value: startDateValue
        }),
        /*#__PURE__*/ _react.default.createElement('input', {
            type: 'date',
            className: 'date-range empty input end-date',
            min: minDateValue,
            onClick: initiate,
            onChange: event => setValue(endDateName, event.target.value),
            value: endDateValue
        })
    );
}
