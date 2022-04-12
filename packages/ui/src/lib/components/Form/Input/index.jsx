import React from 'react';

import './styles.css';

export default function Input({
    type,
    inputClass,
    placeholder,
    name,
    value,
    setValue
}) {
    return (
        <div className="form-group">
            <input
                type={type}
                className={`input ${inputClass}`}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={event => setValue(name, event.target.value)}
            />
        </div>
    );
}
