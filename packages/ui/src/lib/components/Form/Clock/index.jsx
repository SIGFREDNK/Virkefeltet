import React from 'react';

import './styles.css';

export default function Clock({ name, setValue, value }) {
    const initiate = event => {
        event.target.classList.remove('empty');
    };
    return (
        <input
            value={value}
            onChange={event => setValue(name, event.target.value)}
            type="time"
            className="clock empty input"
            onClick={initiate}
        />
    );
}
