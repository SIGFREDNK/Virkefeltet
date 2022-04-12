import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaEye, FaEyeSlash } from 'react-icons/fa';

import './styles.css';
import '../styles.css';

export default function Login({ setUser }) {
    const [visible, setVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const login = async event => {
        event.preventDefault();

        const userCredentials = { email, password };

        const response = await fetch('http://localhost:4002/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userCredentials),
            credentials: 'include'
        });

        const data = await response.json();

        const errorMessage = document.querySelector('.error-message');
        if (data.status === 'failed')
            return (errorMessage.innerHTML = data.message);

        setUser(data.data.user);
        navigate('/schedule');
    };

    return (
        <div className="login-page entry-page">
            <form className="entry-form" onSubmit={login}>
                <Link className="back" to="/">
                    <FaArrowLeft />
                    <span>Tilbage</span>
                </Link>
                <div className="title">
                    <h3>Velkommen tilbage</h3>
                    <span>Log venligst ind nedenfor</span>
                </div>
                <span className="error-message"></span>
                <div className="form-inputs">
                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            placeholder="E-mail..."
                            name="email"
                            className="email"
                            onChange={event => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Adgangskode</label>
                        <input
                            type={visible ? 'text' : 'password'}
                            placeholder="Adgangskode..."
                            name="password"
                            className="password"
                            onChange={event => setPassword(event.target.value)}
                        />
                        {visible && (
                            <FaEye
                                onClick={() => setVisible(false)}
                                className="eye-visible eye"
                            />
                        )}
                        {!visible && (
                            <FaEyeSlash
                                onClick={() => setVisible(true)}
                                className="eye-invisible eye"
                            />
                        )}
                        <div className="other">
                            <div className="remember-me">
                                <input type="checkbox" />
                                <span>Husk Mig</span>
                            </div>
                            <Link to="/forgotten">Glemt Kodeord?</Link>
                        </div>
                    </div>
                    <input type="submit" value="Login" />
                    <span className="or">Har du ikke allerede en bruger?</span>
                    <Link to="/signup" className="secondary">
                        Opret Bruger
                    </Link>
                    <Link className="terms-conditions" to="/terms-conditions">
                        Vilkår og betingelser
                    </Link>
                </div>
            </form>
        </div>
    );
}
