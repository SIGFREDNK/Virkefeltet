import React from 'react';
import { getCurrentDate } from '@virkefeltet/utils';

import './styles.css';

export default function DatePicker({ setValue, value, disablePast, name }) {
    const initiate = event => {
        event.target.classList.remove('empty');
    };

    const minDateValue = disablePast ? getCurrentDate() : null;

    return (
        <input
            type="date"
            className="empty date-selector input"
            onClick={event => initiate(event)}
            value={value}
            onChange={event => setValue(name, event.target.value)}
            min={minDateValue}
        ></input>
    );
}
