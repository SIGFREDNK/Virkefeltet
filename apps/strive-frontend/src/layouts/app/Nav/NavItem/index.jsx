import { Link } from 'react-router-dom';

import './styles.css';

export default function NavItem({
    name,
    icon,
    selected,
    path,
    notify,
    page,
    changePage
}) {
    return (
        <Link
            to={`${path}`}
            className={`nav-item ${selected && 'selected'}`}
            onClick={() => {
                changePage(page);
            }}
        >
            <div className="icon">{icon}</div>
            {notify && <span className="notifications">0</span>}
        </Link>
    );
}
