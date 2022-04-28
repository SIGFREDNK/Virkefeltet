import { useState } from 'react';
import { FaFire, FaPlusCircle } from 'react-icons/fa';
import { Button } from '@virkefeltet/ui';

import './styles.css';
import '../styles.css';

export default function Habit({
    title,
    text,
    category,
    interval,
    numberOfTimes,
    id
}) {
    const [streak, setStreak] = useState(0);
    const [timesRemaining, setTimesRemaining] = useState(numberOfTimes);

    const changeTimesRemaining = () => {
        if (timesRemaining === 1) setStreak(streak + 1);
        setTimesRemaining(timesRemaining > 0 ? timesRemaining - 1 : 0);
    };

    return (
        <div className="habit card">
            <div className="card-layout">
                <div className="left">
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
                <div className="right">
                    <Button
                        onclick={changeTimesRemaining}
                        value={<FaPlusCircle />}
                    />
                </div>
            </div>
            <small
                className="times-left"
                style={{ color: timesRemaining === 0 ? 'green' : 'orange' }}
            >
                {timesRemaining === 0
                    ? 'Udført for i dag'
                    : `${timesRemaining} gange tilbage`}
            </small>
            <small className="streak">
                <FaFire />
                {streak}
            </small>
            <small className="small category">{category}</small>
            <small className="small interval">{interval}</small>
        </div>
    );
}
