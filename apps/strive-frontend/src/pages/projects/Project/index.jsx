import { Link } from 'react-router-dom';

import './styles.css';

export default function Project({ name, link }) {
    return (
        <Link className="card project" to={link}>
            <div className="card-layout">
                <div className="left">
                    <h3>{name}</h3>
                </div>
                <div className="right">
                    <span className="progress">0/1</span>
                </div>
            </div>
            <small className="small category">App</small>
            <small className="small date">31-12-2022</small>
        </Link>
    );
}
