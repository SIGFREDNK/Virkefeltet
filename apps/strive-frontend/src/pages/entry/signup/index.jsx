import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaEye, FaEyeSlash } from 'react-icons/fa';

import './styles.css';
import '../styles.css';

export default function Signup() {
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    return (
        <div className="signup-page entry-page">
            <form
                action="/api/auth/signup"
                method="POST"
                className="entry-form"
            >
                <Link className="back" to="/">
                    <FaArrowLeft />
                    <span>Tilbage</span>
                </Link>
                <div className="title">
                    <h3>Velkommen</h3>
                    <span>Udfyld venligst nedenstående</span>
                </div>
                <div className="form-inputs">
                    <div className="form-group">
                        <label htmlFor="firstname">Fornavn</label>
                        <input
                            type="text"
                            placeholder="Fornavn..."
                            name="firstname"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="surname">Efternavn</label>
                        <input
                            type="text"
                            placeholder="Efternavn..."
                            name="surname"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            placeholder="E-mail..."
                            name="email"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Adgangskode</label>
                        <input
                            type={visible ? 'text' : 'password'}
                            placeholder="Adgangskode..."
                            name="password"
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
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordConfirm">
                            Gentag Adgangskode
                        </label>
                        <input
                            type={visible2 ? 'text' : 'password'}
                            placeholder="Gentag adgangskode..."
                            name="passwordConfirm"
                        />
                        {visible2 && (
                            <FaEye
                                onClick={() => setVisible2(false)}
                                className="eye-visible eye"
                            />
                        )}
                        {!visible2 && (
                            <FaEyeSlash
                                onClick={() => setVisible2(true)}
                                className="eye-invisible eye"
                            />
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Telefonnummer</label>
                        <div className="phone-number">
                            <select name="countryCode" id="">
                                <option data-countryCode="DK" value="45">
                                    +45
                                </option>
                            </select>
                            <input
                                type="text"
                                placeholder="Telefonnummer..."
                                name="phoneNumber"
                            />
                        </div>
                    </div>
                    <div className="form-group street">
                        <label htmlFor="">Adresse</label>
                        <div className="street address">
                            <input
                                type="text"
                                name="streetName"
                                placeholder="Gade..."
                            />
                            <input
                                type="text"
                                name="streetNumber"
                                placeholder="Nr..."
                            />
                        </div>
                        <div className="city address">
                            <input
                                type="text"
                                name="city"
                                placeholder="By..."
                            />
                            <input
                                type="text"
                                name="postalCode"
                                placeholder="Postnummer..."
                            />
                        </div>
                        <div className="country address">
                            <select name="country" id="">
                                <option value="denmark">Danmark</option>
                            </select>
                        </div>
                    </div>
                    <div className="conditions">
                        <div className="privacy-policy">
                            <input type="checkbox" required />
                            <span>
                                Jeg har læst og accepterer
                                <Link to="/privacy-policy">
                                    privatlivspolitikken
                                </Link>
                            </span>
                        </div>
                        <div className="terms-of-service">
                            <input type="checkbox" required />
                            <span>
                                Jeg har læst og accepterer
                                <Link to="/terms-of-service">
                                    brugervilkårene
                                </Link>
                            </span>
                        </div>
                    </div>
                    <input type="submit" value="Opret Bruger" />
                    <span className="or">Har du allerede en bruger?</span>
                    <Link to="/signup" className="secondary">
                        Login
                    </Link>
                </div>
            </form>
        </div>
    );
}
