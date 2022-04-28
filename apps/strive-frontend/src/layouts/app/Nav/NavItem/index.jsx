import { Link } from 'react-router-dom';

import './styles.css';

export default function NavItem({ icon, selected, path, notify }) {
    return (
        <Link to={`${path}`} className={`nav-item ${selected && 'selected'}`}>
            <div className="icon">{icon}</div>
            {notify && <span className="notifications">0</span>}
        </Link>
    );
}
