import React from 'react';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import '../styles.css';

export default function Dropdown({
    width,
    options,
    value,
    setValue,
    name,
    required
}) {
    const [isOpen, open] = useState(false);

    useEffect(() => {
        const close = event => {
            if (!event.target.classList.contains('dropdown-component'))
                open(false);
            document.removeEventListener('mousedown', close);
        };

        if (isOpen) document.addEventListener('mousedown', close);
    }, [isOpen, open]);

    return (
        <div
            className="select dropdown dropdown-component"
            onClick={() => open(isOpen ? false : true)}
            style={{ width: width }}
        >
            <input
                type="text"
                className="dropdown-component selector input"
                value={value}
                onChange={event => setValue(name, event.target.value)}
                readOnly
                required={required}
            />
            {isOpen && (
                <div
                    className="options dropdown-component"
                    style={{ width: width }}
                >
                    {options.map((option, key) => (
                        <div
                            key={key}
                            className="option dropdown-component"
                            onClick={() => setValue(name, option.value)}
                            style={{
                                width: width,
                                display:
                                    option.value === value ? 'none' : 'flex'
                            }}
                        >
                            {option.value}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

Dropdown.defaultProps = {
    width: '100%',
    height: '2.5rem',
    required: false
};

Dropdown.propTypes = {
    value: PropTypes.string,
    options: PropTypes.array
};
