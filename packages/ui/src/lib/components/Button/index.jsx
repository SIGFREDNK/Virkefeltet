import React from 'react';

import './styles.css';

export default function Button({ value, onclick, styling }) {
    return (
        <button className={styling} onClick={onclick}>
            {value}
        </button>
    );
}
