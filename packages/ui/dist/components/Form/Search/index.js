'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.default = Search;

require('core-js/modules/web.dom-collections.iterator.js');

require('core-js/modules/es.string.includes.js');

var _react = _interopRequireWildcard(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _fa = require('react-icons/fa');

require('./styles.css');

require('../styles.css');

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== 'function') return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache(
        nodeInterop
    ) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (
        obj === null ||
        (typeof obj !== 'object' && typeof obj !== 'function')
    ) {
        return { default: obj };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor =
        Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
        if (
            key !== 'default' &&
            Object.prototype.hasOwnProperty.call(obj, key)
        ) {
            var desc = hasPropertyDescriptor
                ? Object.getOwnPropertyDescriptor(obj, key)
                : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}

function Search(_ref) {
    let { options, width, value, setValue, label, name } = _ref;
    const [isOpen, setIsOpen] = (0, _react.useState)(false);
    const [frozen, setFrozen] = (0, _react.useState)(false);

    const open = () => {
        if (frozen) return;
        setIsOpen(true);
    };

    const freeze = () => {
        setIsOpen(false);
        setFrozen(true);
    };

    const unfreeze = () => {
        setFrozen(false);
        setValue(name, '');
    };

    (0, _react.useEffect)(() => {
        const handleClick = event => {
            if (event.target.classList.contains('select-component')) return;
            setIsOpen(false);
            document.removeEventListener('click', handleClick);
            setValue(name, '');
        };

        if (isOpen === true) document.addEventListener('click', handleClick); // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);
    return /*#__PURE__*/ _react.default.createElement(
        'div',
        {
            className: 'select search select-component',
            style: {
                width: width,
                cursor: frozen ? 'default' : 'pointer'
            }
        },
        /*#__PURE__*/ _react.default.createElement('input', {
            type: 'text',
            value: value,
            placeholder: label,
            style: {
                width: width,
                cursor: frozen ? 'default' : 'pointer'
            },
            onChange: event => setValue(name, event.target.value),
            onSelect: open,
            readOnly: frozen,
            className: 'select-component selector input'
        }),
        /*#__PURE__*/ _react.default.createElement(
            'div',
            {
                className: 'options select-component',
                style: {
                    width: width
                }
            },
            isOpen &&
                options
                    .filter(option =>
                        option.value.toLowerCase().includes(value.toLowerCase())
                    )
                    .map((option, key) =>
                        /*#__PURE__*/ _react.default.createElement(
                            'div',
                            {
                                key: key,
                                className: 'option select-component',
                                style: {
                                    width: width
                                },
                                onClick: () => {
                                    setValue(name, option.value);
                                    freeze();
                                }
                            },
                            option.value
                        )
                    )
        ),
        frozen &&
            /*#__PURE__*/ _react.default.createElement(_fa.FaTimes, {
                className: 'close select-component',
                onClick: unfreeze
            })
    );
}

Search.defaultProps = {
    width: '100%',
    height: '2.5rem'
};
Search.propTypes = {
    label: _propTypes.default.string,
    options: _propTypes.default.array
};
