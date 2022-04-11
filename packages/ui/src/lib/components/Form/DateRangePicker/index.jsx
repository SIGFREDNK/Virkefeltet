import React from 'react';

import './styles.css';

export default function DateRangePicker({
    startDateValue,
    endDateValue,
    startDateName,
    endDateName,
    setValue,
    disablePast
}) {
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

    return (
        <>
            <input
                type="date"
                className="date-range empty input start-date"
                min={minDateValue}
                onClick={initiate}
                onChange={event => update(event)}
                value={startDateValue}
            />
            <input
                type="date"
                className="date-range empty input end-date"
                min={minDateValue}
                onClick={initiate}
                onChange={event => setValue(endDateName, event.target.value)}
                value={endDateValue}
            />
        </>
    );
}
