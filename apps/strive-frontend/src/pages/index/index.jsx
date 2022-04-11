import { Link } from 'react-router-dom';

import './styles.css';

export default function Frontpage() {
    return (
        <div className="landing-page">
            <div className="logo-wrapper">
                <h1 className="title">Strive</h1>
                <p className="subtitle">
                    Track your progress. Achieve your goals
                </p>
            </div>
            <div className="actions">
                <Link to="/login" className="login">
                    Login
                </Link>
                <a href="/signup" className="signup">
                    Opret Bruger
                </a>
            </div>
        </div>
    );
}
