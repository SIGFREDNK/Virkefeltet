import { FaCheck, FaThumbtack, FaTrash } from 'react-icons/fa';

import './styles.css';
import '../styles.css';

export default function Task({ title, text, category, date }) {
    const formattedDate = new Date(date);
    const d =
        formattedDate.getDate() < 10
            ? `0${formattedDate.getDate()}`
            : formattedDate.getDate();

    const m =
        formattedDate.getMonth() + 1 < 10
            ? `0${formattedDate.getMonth() + 1}`
            : formattedDate.getMonth();

    const y = formattedDate.getFullYear();

    return (
        <div className="card task">
            <div className="card-layout">
                <div className="left">
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
                <div className="right">
                    <FaTrash />
                    <FaThumbtack />
                    <FaCheck />
                </div>
            </div>
            <small className="small category">{category}</small>
            <small className="small date">{`${d}-${m}-${y}`}</small>
        </div>
    );
}
