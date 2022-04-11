import React from 'react';

import './styles.css';

export default function Input({ type, inputClass, placeholder, name }) {
    return (
        <div className="form-group">
            <input
                type={type}
                className={`input ${inputClass}`}
                placeholder={placeholder}
                name={name}
            />
        </div>
    );
}
