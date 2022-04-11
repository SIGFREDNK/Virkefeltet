import { FaCheck, FaEllipsisV } from 'react-icons/fa';

import './styles.css';

export default function Task({ title, text }) {
    return (
        <div className="card task">
            <div className="left">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
            <div className="right">
                <FaCheck />
                <FaEllipsisV />
            </div>
        </div>
    );
}
