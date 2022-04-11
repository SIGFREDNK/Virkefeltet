import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';

import './styles.css';
import '../styles.css';

export default function Search({
    options,
    width,
    value,
    setValue,
    label,
    name
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [frozen, setFrozen] = useState(false);

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

    useEffect(() => {
        const handleClick = event => {
            if (event.target.classList.contains('select-component')) return;
            setIsOpen(false);
            document.removeEventListener('click', handleClick);
            setValue(name, '');
        };
        if (isOpen === true) document.addEventListener('click', handleClick);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    return (
        <div
            className="select search select-component"
            style={{
                width: width,
                cursor: frozen ? 'default' : 'pointer'
            }}
        >
            <input
                type="text"
                value={value}
                placeholder={label}
                style={{
                    width: width,
                    cursor: frozen ? 'default' : 'pointer'
                }}
                onChange={event => setValue(name, event.target.value)}
                onSelect={open}
                readOnly={frozen}
                className="select-component selector input"
            />
            <div
                className="options select-component"
                style={{
                    width: width
                }}
            >
                {isOpen &&
                    options
                        .filter(option =>
                            option.value
                                .toLowerCase()
                                .includes(value.toLowerCase())
                        )
                        .map((option, key) => (
                            <div
                                key={key}
                                className="option select-component"
                                style={{ width: width }}
                                onClick={() => {
                                    setValue(name, option.value);
                                    freeze();
                                }}
                            >
                                {option.value}
                            </div>
                        ))}
            </div>
            {frozen && (
                <FaTimes
                    className="close select-component"
                    onClick={unfreeze}
                />
            )}
        </div>
    );
}

Search.defaultProps = {
    width: '100%',
    height: '2.5rem'
};

Search.propTypes = {
    label: PropTypes.string,
    options: PropTypes.array
};
