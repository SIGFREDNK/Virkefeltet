import { useState } from 'react';
import { FaFire, FaPlusCircle } from 'react-icons/fa';
import Button from '../../../components/Button';

import './styles.css';

export default function Habit({ title, text }) {
    const [streak, setStreak] = useState(0);

    function addStreak() {
        setStreak(streak + 1);
    }

    return (
        <div className="habit card">
            <div className="left">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
            <div className="right">
                <span>
                    <FaFire />
                    {streak}
                </span>
                <Button onclick={addStreak} value={<FaPlusCircle />} />
            </div>
        </div>
    );
}
