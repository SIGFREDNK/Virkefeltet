import React from 'react';

import './styles.css';

export default function Switch({ name, value, setValue }) {
    return (
        <label className="switch">
            <input type="checkbox" />
            <span
                className="slider round"
                checked={value}
                onClick={() => {
                    setValue(name, value ? false : true);
                }}
            ></span>
        </label>
    );
}
